import React from 'react'
import { useState } from 'react'

function HogForm({addHog}) {

    

    const initialForm = {
            name: '',
            weight: -1,
            "highest medal achieved": "",
            image: "",
            greased: true,
            specialty: ""
    }


    const [form, setForm] = useState(initialForm)

    function handleForm(e){
        console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name] : e.target.value

        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(form)
        addHog(form)
        setForm(initialForm)
    }
    

  return (
    <div>HogForm

            <form onSubmit={(e) => handleSubmit(e)}>
				<input onChange={(e) => handleForm(e)} type='text' name="name" value={form.name} placeholder="name"></input>
				<input onChange={(e) => handleForm(e)} type='number' name="weight"  value={form.weight}  placeholder="weight"></input>
				<input onChange={(e) => handleForm(e)} type='text' name="highest medal achieved"  value={form["highest medal achieved"]} placeholder='highest medal achieved'></input>
				<input onChange={(e) => handleForm(e)} type='text' name="specialty"  value={form.specialty} placeholder='specialty'></input>
				<input onChange={(e) => handleForm(e)} type='text' name="image" value={form.image} placeholder='image'></input>
				<select onChange={(e) => handleForm(e)} value={form.greased} name="greased">
                    <option value={true}>Greased</option>
                    <option value={false}>Ungreased</option>
                </select>

                <button type='submit' value="submit">Submit</button>
			</form>


    </div>
  )
}

export default HogForm