import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.error(error)
        throw new Error("Cabins could not be loaded")
    }
    return data

}

export async function createCabin(newCabin) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = `${supabaseUrl}/storage/1/object/public/cabin-images/${imageName}`

    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, imagePath }])
        .select()

    if (error) {
        console.error(error)
        throw new Error("Cabin could not be created")
    }

    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)
    
        // Delete cabin if there was an errror uploading image
        if (storageError) {
            await supabase.from("cabins").delete().eq("id", data.id)
            console.error(storageError)
            throw new Error("Cabin image could not be uploaded and cabin was not created")
        }

    return data
}


export async function deleteCabin(id) {

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    if (error) {
        console.error(error)
        throw new Error("Cabin could not be deleted")
    }
    return data;

}