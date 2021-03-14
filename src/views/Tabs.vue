<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="today" href="/tabs/today">
          <ion-icon :icon="calendarClearOutline" />
          <ion-label>Today</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="contexts" href="/tabs/contexts">
          <ion-icon :icon="ellipse" />
          <ion-label>Contexts</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  calendarClearOutline,
  ellipse,
  square,
  triangle,
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      calendarClearOutline,
      ellipse,
      square,
      triangle,
    };
  },
};
</script>
