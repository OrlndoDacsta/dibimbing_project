/**
 * Show menu sesuai dengan "user role", ketentuan:
 *
 * administrator:
 * - menu 1, menu 2, menu 3, menu 4, menu 5
 *
 * admin:
 * - menu 1, menu 2, menu 3
 *
 * member:
 * - menu 1, menu 2, menu 5
 */

const prompt = require("prompt-sync")();

const role = prompt("Role user ? "); // user role
const menus = ["menu 1", "menu 2", "menu 3", "menu 4", "menu 5"]; // available menu
const permission = {
  administrator: ["menu 1", "menu 2", "menu 3", "menu 4", "menu 5"],
  admin: ["menu 1", "menu 2", "menu 3"],
  member: ["menu 1", "menu 2", "menu 5"],
};

for (let i = 0; i < menus.length; i++) {
  let showMenu = false;
  if (permission[role]) {
    if (permission[role].includes(menus[i])) {
      showMenu = true;
    }
  }

  if (showMenu) {
    console.log(menus[i]);
  }
}

// for (let i = 0; i < menus.length; i++) {
//   const menu = menus[i];
//   if (permission[role.toLocaleLowerCase()].includes(menu)) {
//     console.log(menu);
//   }
// }

//   if (role == "administrator") {
//     console.log(menus[i]);
//   }
// }

// for (let j of [0, 1, 4]) {
//   if (role == "member") {
//     console.log(menus[j]);
//   }
// }

// for (let x = 0; x < menus.length - 2; x++) {
//   if (role == "admin") {
//     console.log(menus[x]);
//   }
