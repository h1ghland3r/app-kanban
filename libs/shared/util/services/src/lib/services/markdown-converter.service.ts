import { Injectable, inject } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Injectable({
    providedIn: 'root'
})
export class MarkdownConverterService {

    private markdownService = inject(MarkdownService);

    convertToMarkdown(text: string): string | Promise<string> {
        return this.markdownService.parse(text);
    }
}
