import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownConverterService } from 'shared/util/services';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
    let spectator: Spectator<CardComponent>;

    const createComponent = createComponentFactory({
        component: CardComponent,
        providers: [
            mockProvider(MarkdownConverterService, {
                convertToMarkdown: () => 'Parsed text'
            }),
            mockProvider(MarkdownService)
        ]
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
