export function UPDATE_PLAYER (state, player) {
    let index = state.players.findIndex(item => item.id == player.id)
    state.players[index] = player
}
export function DELETE_PLAYER (state, id) {
  state.players.splice(id, 1)
}
export function ADD_PLAYER (state, player) {
  state.players.push(player)
}
export function UPDATE_STAFF (state, staff) {
  let index = state.staff.findIndex(item => item.id == staff.id)
  state.staff[index] = staff
}
export function DELETE_STAFF (state, id) {
  state.staff.splice(id, 1)
}
export function ADD_STAFF (state, staff) {
  state.staff.push(staff)
}
