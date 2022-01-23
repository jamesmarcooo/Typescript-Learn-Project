/// <reference path="../node_modules/@types/google.maps/index.d.ts" />
import { User } from "./User";
import { Company } from "./Company";

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
