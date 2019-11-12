import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'bs-tabs-shortcodes',
    styleUrl: 'bs-tabs-shortcodes.scss',
    shadow: true
})
export class BsTabsShortcodes {

    render() {
        return (
            <Host>
                Bs Tabs Shortcodes Component
                <slot></slot>
            </Host>
        );
    }

}
