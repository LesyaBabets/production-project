
type Mods= Record<string, boolean | string>;
 
export function classNames (cls: string, mods: Mods, addictional: string[]): string {
 return [
    cls,
    ...addictional,
    ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className, value]) => className )
 ].join(' ') 
}

classNames('remove-btn', {hovered: true, selectable: true, red: false }, ['pdg'])