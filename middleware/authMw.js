export default function ({ store, redirect }) {
  // *  Redirect to login if unauthenticated
  if (store.getters['auth/authStatus'] == 'unauthenticated') {
    return redirect('/login')
  }
}
