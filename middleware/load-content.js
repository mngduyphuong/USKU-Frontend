import RSVP from 'rsvp'

export default async function ({ store, from }) {
    if (!store.state.isLoaded) {
        await RSVP.all([
            store.dispatch("pricing/loadPricings"),

        ])
        store.commit('FINISH_LOADING')
    }
}