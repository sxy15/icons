/**
 * @file vue-next all.ts
 * @author Auto Generated by IconSpace
 */

import { h, App, DefineComponent, ComponentOptions } from 'vue'
import * as IconMap from './map'
import { IIconProps } from './runtime'

export type IconType = keyof typeof IconMap

export interface IIconAllProps extends IIconProps {
    // FIXME just use string to prevent type error.
    type: IconType | string
}

export type IIconAllOptions = ComponentOptions<IIconAllProps>

// 包裹后的图标
export type AllIcon = DefineComponent<IIconAllProps>

function toPascalCase(val: string): string {
    return val.replace(/(^\w|-\w)/g, c => c.slice(-1).toUpperCase())
}

const IconSpaceOptions: IIconAllOptions = {
    name: 'icon-space',
    props: ['tag', 'size', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'theme', 'fill', 'spin', 'type'],
    setup: props => {
        const type = toPascalCase(props.type)

        if (!(type in IconMap)) {
            console.error(`${type} is not a valid icon type name`)
            return () => {}
        }

        return () => h(IconMap[type as IconType], props)
    }
}

export const IconSpace: AllIcon = IconSpaceOptions as AllIcon

export function install(Vue: App, prefix?: string): void {
    Object.values(IconMap).forEach(icon => {
        Vue.component(prefix ? prefix + '-' + icon.name.slice(5) : icon.name, icon)
    })
}
