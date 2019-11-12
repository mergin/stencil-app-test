import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'bs-slider',
    styleUrl: 'bs-slider.scss',
    shadow: true
})
export class BsSlider {

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
