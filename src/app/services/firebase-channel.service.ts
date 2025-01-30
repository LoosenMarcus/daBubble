import { Injectable, inject } from '@angular/core';
import { Channel } from '../interfaces/channel.interface';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  doc,
  collectionData,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseChannelService {
  firestore: Firestore = inject(Firestore); //datenbank wird verknüpft

  constructor() {}

  //HIER KOMMT VIEL CODE ZUM ABGUCKEN##################################################################################################

  // //Einträge löschen
  // async deleteNote(colId: 'notes' | 'trash', docId: string) {
  //   await deleteDoc(this.getsingleDocRef(colId, docId)).catch((err) => {
  //     console.error(err);
  //   });
  // }

  // //Einträge updaten
  // async updateNote(channel: Channel) {
  //   if (channel.id) {
  //     let docRef = this.getsingleDocRef(this.getColIdFromNotes(channel), channel.id);
  //     await updateDoc(docRef, this.getCleanJSON(channel)).catch((err) => {
  //       console.error(err);
  //     });
  //   }
  // }

  // //Hilfsfunktion
  // getCleanJSON(note: Note) {
  //   return {
  //     type: note.type,
  //     title: note.title,
  //     content: note.content,
  //     marked: note.marked,
  //   };
  // }

  // //Hilfsfunktion
  // getColIdFromNotes(note: Note): string {
  //   if (note.type == 'note') {
  //     return 'notes';
  //   } else {
  //     return 'trash';
  //   }
  // }

  //Einträge hinzufügen
  async addNote(item: Channel, colId: 'notes' | 'trash') {
    //bei referenz getNoteRef wird item (JSON) eingefügt
    if (colId == 'notes') {
      await addDoc(this.getNotesRef(), item)
        .catch((err) => {
          console.error(err);
        })
        .then((docRef) => {
          console.log('Document written with ID:', docRef?.id);
        });
    } else if (colId == 'trash') {
      await addDoc(this.getTrashRef(), item)
        .catch((err) => {
          console.error(err);
        })
        .then((docRef) => {
          console.log('Document written with ID:', docRef?.id);
        });
    }
  }

  // ngOnDestroy() {
  //   this.unsubNotes();
  //   this.unsubTrash();
  // }

  // subTrashList() {
  //   return onSnapshot(this.getTrashRef(), (list) => {
  //     this.trashNotes = [];
  //     list.forEach((element) => {
  //       //Gibt Objekt zurück
  //       //console.log(element);
  //       //Gibt ID zurück
  //       //console.log(element.id);
  //       //Gibt werte zurück
  //       //console.log(element.data());
  //       //einträge aus DB aus wo id passt
  //       //console.log(this.setNoteObject(element.data(), element.id));
  //       this.trashNotes.push(this.setNoteObject(element.data(), element.id));
  //     });
  //   });
  // }

  // subNotesList() {
  //   return onSnapshot(this.getNotesRef(), (list) => {
  //     this.normalNotes = [];
  //     list.forEach((element) => {
  //       //Gibt Objekt zurück
  //       // console.log(element);
  //       //Gibt ID zurück
  //       // console.log(element.id);
  //       //Gibt werte zurück
  //       // console.log(element.data());
  //       //einträge aus DB aus wo id passt
  //       // console.log(this.setNoteObject(element.data(), element.id));
  //       this.normalNotes.push(this.setNoteObject(element.data(), element.id));
  //     });
  //   });
  // }
  /**
   *
   * @returns  referenz der Datenbank this.firestore mit der ID notes zurück
   */
  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  /**
   *
   * @returns  referenz der Datenbank this.firestore mit der ID trash zurück
   */
  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  /**
   * Referenziert auf einzelnes Document
   * colId findet man in der ersten Spalte der Datenbank
   * docId findet man in der Zweiten Spalte der Datenbank
   * @param colId string ID der Collection/Sammlung
   * @param docId  string ID des Documents
   */
  getsingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }

  //setzt werte an NoteObject und leere werte wenn keine angegeben sind
  // setNoteObject(obj: any, id: string): Note {
  //   return {
  //     id: id,
  //     type: 'note' || 'trash',
  //     title: obj.title || '',
  //     content: obj.content || '',
  //     marked: obj.marked || 'false',
  //   };
  // }
}
