export default function ({ store, redirect }) {
  // *  Redirect to home page if authenticated
  if (store.getters['auth/authStatus'] != 'unauthenticated') {
    return redirect('/')
  }
}
