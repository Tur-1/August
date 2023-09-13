import { reactive } from 'vue';

let FormStore = reactive({
    fields: {},
    errors: [],

    clearErrors()
    {
        this.errors = {};
    },

    addValuesToField()
    {

    },
    setFields(fields)
    {
        this.fields = fields;
    },
    appendFields(newFields)
    {

        let field;
        for (field in newFields)
        {
            if (!this.fields.hasOwnProperty(newFields))
            {
                this.fields[field] = newFields[field];
            }

        }
    },
    clearFields()
    {

        let field;
        for (field in this.fields)
        {
            this.fields[field] = '';
        }
    },
    setErrors(error) 
    {
        if (error && error.response?.status == 422)
        {
            this.errors = error.response.data.errors;
        }
    }
})


export default FormStore;