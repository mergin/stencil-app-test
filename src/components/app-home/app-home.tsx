import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css',
    shadow: true
})
export class AppHome {

    @Prop() textItems: any[] = [
        {
            icon: 'exclamation',
            title: 'Lorem ipsum dolor sit, amet consectetur',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum necessitatibus quos. Libero temporibus consectetur tempora veritatis eius praesentium'
        },
        {
            icon: 'check',
            title: 'Lorem ipsum dolor sit, amet consectetur',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum necessitatibus quos. Libero temporibus consectetur tempora veritatis eius praesentium'
        },
        {
            icon: 'thumbsup',
            title: 'Lorem ipsum dolor sit, amet consectetur',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum necessitatibus quos. Libero temporibus consectetur tempora veritatis eius praesentium'
        }
    ];

    render() {
        return (
            <div class='app-home'>

                {/* slider */}
                <bs-slider
                    title="Cuenta Mi Tesoro"
                    text="Tenemos la cuenta que hace que ahorres automágicamente">
                </bs-slider>

                {/* tabs with shortcodes */}
                <bs-tabs-shortcodes>

                </bs-tabs-shortcodes>

                {/* text block */}
                <bs-text-block
                    title="¿Por qué Banc Sabadell?"
                    columns={this.textItems}>
                </bs-text-block>

                {/* <stencil-route-link url='/profile/stencil'>
                    <button>
                        Profile page
                    </button>
                </stencil-route-link> */}
            </div>
        );
    }
}
