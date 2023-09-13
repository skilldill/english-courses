import { Module } from '@tramvai/core';
import { Footer } from './Footer';
import { DEFAULT_FOOTER_COMPONENT } from '@tramvai/tokens-render';

@Module({
    providers: [
        {
            provide: DEFAULT_FOOTER_COMPONENT,
            useValue: Footer,
        }
    ]
})
export class FooterModule {}