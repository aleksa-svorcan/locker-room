<template>
  <q-layout view="lHr lpR fFf">

    <q-header reveal elevated class="app-header bg-white text-white row justify-center">
      <q-toolbar class="q-px-none">
        <div class="menu-button-container q-px-sm bg-white row flex-center items-center justify-center">
        <q-btn dense flat round @click="left = !left">
          <q-icon class="nav-icon text-dark" name="menu" ></q-icon>
        </q-btn>
        </div>
        <q-toolbar-title>
          <div class="logged-in-user-menu q-pa-md flex justify-end">
            <q-btn-dropdown class="logged-in-user-menu-inner text dark" flat color="dark">
              <template v-slot:label>
                <img src="../statics/persons/trainer.png">
                <p class="text-dark q-ml-md q-my-none">Andrea Trinchieri</p>
              </template>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Option1</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Option2</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Option3</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </q-toolbar-title>
        <div class="messenger-button-container q-px-sm bg-white row flex-center items-center justify-center">
          <q-btn dense flat round @click="right = !right">
            <q-icon class="nav-icon text-dark" name="message" ></q-icon>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" content-class="bg-dark text-white">
      <q-list>
        <div class="layout-team-logo-container flex flex-center q-mb-xl">
          <img  class="layout-team-logo" src="../statics/partizan-main-logo.png"/>
        </div>
        <q-item class="nav-item" clickable tag="a" :to="{path: '/', exact: true}">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/ios-people.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Rooster</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/basketball.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Game Plan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/whistle.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Practice Plan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/kettlebell.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Weight Room</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/Frame.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Playbook</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/ion-ios-videocam.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Self Scouting</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/Group.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Medical</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/ion-stats-bars.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Stats</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Standings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
            <q-item-section avatar>
              <img color="white" src="../statics/project_icons/ic_folder_24px.svg" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Team Goals</q-item-label>
            </q-item-section>
          </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/news.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>News</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/grid-45.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Gallery</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/messages.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Team Chat</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-item" clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img color="white" src="../statics/project_icons/ios-calendar.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendar</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer :width=100 class="messenger-drawer" show-if-above v-model="right" side="right">
      <div class="messenger-header bg-dark q-mb-xl"></div>
    </q-drawer>

    <q-page-container class="pages-container bg-grey-2">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        left: false,
        right: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .app-header {
    height: 100px;
    .messenger-button-container {
      height: 100%;
      width: 50px;
    }
    .menu-button-container {
      height: 100%;
      width: 50px;
    }
    .nav-icon {
      font-size: 32px;
    }
  }
  .layout-team-logo-container {
    height: 100px;
    .layout-team-logo {
      height: 90px;
      width: auto;
      object-fit: contain;
    }
  }
  .nav-item {
    font-weight: bold;
  }
  .messenger-drawer {
    .messenger-header {
      height: 100px;
      width: 100%;
    }
  }

  .logged-in-user-menu {
    width: 100%;

    .logged-in-user-menu-inner p{
      font-size: 16px;
    }
  }

  .pages-container {
    min-height: 100vh;
  }
</style>
