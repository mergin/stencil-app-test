import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'bs-mega-menu',
    styleUrl: 'bs-mega-menu.scss',
    shadow: true
})
export class BsMegaMenu {

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
