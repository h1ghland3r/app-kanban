import { SpectatorService, createServiceFactory, mockProvider } from '@ngneat/spectator/jest';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownConverterService } from './markdown-converter.service';

describe('MarkdownConverterService', () => {
    let spectator: SpectatorService<MarkdownConverterService>;

    const createService = createServiceFactory({
        service: MarkdownConverterService,
        providers: [mockProvider(MarkdownService)]
    });

    beforeEach(() => {
        spectator = createService();
    });

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should convert text to markdown', () => {
        const markdownService = spectator.inject(MarkdownService);
        const parseSpy = jest.spyOn(markdownService, 'parse').mockReturnValue('Parsed text');

        const inputText = 'Markdown text';
        const convertedText = spectator.service.convertToMarkdown(inputText);

        expect(convertedText).toBe('Parsed text');
        expect(parseSpy).toHaveBeenCalledWith(inputText);
    });
});
