import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'bs-text-block',
    styleUrl: 'bs-text-block.scss',
    shadow: true
})
export class BsTextBlock {

    @Prop() title: string;

    // columns to be displayed (2,3,4)
    @Prop() columns: any[];

    render() {
        return (
            <Host>
                <div class="grid-container">
                    <h2 class="header">{this.title}</h2>
                    {this.columns.map(
                        (column) =>
                            <div class="">
                                <span>{column.icon}</span>
                                <h3>{column.title}</h3>
                                <p>{column.text}</p>
                            </div>
                    )}
                </div>
                {/* <h2>{this.title}</h2> */}
                <slot></slot>
            </Host>
        );
    }

}
