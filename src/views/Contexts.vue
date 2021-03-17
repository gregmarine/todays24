<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contexts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Contexts</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-label position="floating">Context Name</ion-label>
        <ion-input></ion-input>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonItem,
  IonInput,
  IonLabel,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  name: "Contexts",
  components: { IonHeader, IonItem, IonInput, IonLabel, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
