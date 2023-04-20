import './MainMenu.css'
export function MainMenu() {

    const scenes = ['lol','grol','mol','gdol','twol','afol']
    return <div className="scene-grid">
        {scenes.map(scene => {
            return <div className="scene-item">{scene}</div>
        })}
    </div>
}