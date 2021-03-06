import Orphanage from '../models/Orphanage';
import images_view from './images_view'

export default {
    render(orphanages: Orphanage ){
        return {
            id: orphanages.id,
            name: orphanages.name,
            latitude: orphanages.latitude,
            longitude: orphanages.longitude,
            about: orphanages.about,
            instructions: orphanages.instructions,
            opening_hours: orphanages.opening_hours,
            open_on_weekends:orphanages.open_on_weekends,
            images: images_view.renderMany(orphanages.images)
        }
    },
    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage) );
    }
}