import axios from 'axios';
import { defineStore } from 'pinia';

export const useUnicornStore = defineStore('UnicornStore', {
  state: () => ({
    unicornData: [],
    singleUnicornData: {}
  }),

  getters: {

  },

  actions: {
    async getAllUnicornData() {
      //this.loading = true;

      try {

        let crudUniqueId = import.meta.env.VITE_CRUD_UNIQUE_ID;
        const result = await axios.get(`https://crudcrud.com/api/${crudUniqueId}/unicorns`);
        this.unicornData = result.data;
        console.log('axior data', result);
      }
      catch (error) {
        console.log('error', error)
      }
      finally {
        console.log('done')
      }
    },
    // async getIdWiseCrudInfo(id) {
    //   try {
    //     console.log('axior data-2', id);
    //     let crudUniqueId = import.meta.env.VITE_CRUD_UNIQUE_ID;
    //     const result = await axios.get(`https://crudcrud.com/api/${crudUniqueId}/unicorns/${id}`);
    //     this.singleUnicornData = result.data
    //     console.log('axior data-2', result);
    //   }
    //   catch (error) {
    //     console.log('error', error)
    //   }
    //   finally {
    //     console.log('done')
    //   }
    // }
    async createUnicorn(data){
      try {
        console.log('createUnicorn', data);
        let crudUniqueId = import.meta.env.VITE_CRUD_UNIQUE_ID;
        const result = await axios.post(
          `https://crudcrud.com/api/${crudUniqueId}/unicorns`, 
          data, 
          { headers: { 'Content-Type': 'application/json' } }
        );
        //this.unicornData = result.data;
        console.log('axior data', result);
      }
      catch (error) {
        console.log('error', error)
      }
      finally {
        console.log('done')
      }
    }
  }
});
