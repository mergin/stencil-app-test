import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'bs-slider',
    styleUrl: 'bs-slider.scss',
    shadow: true
})
export class BsSlider {

    @Prop() title: string;

    @Prop() image: string;

    @Prop() text: string;

    render() {
        return (
            <Host>
                <h1>{this.title}</h1>
                <p>{this.text}</p>
                <slot></slot>
            </Host>
        );
    }

}
