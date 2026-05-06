import { getAnimalDetails } from "@/lib/data";


const AnimalDetailsPage = async({params}) => {
    const {id} = await params;
    const selectedAnimal = await getAnimalDetails(id)
    console.log(selectedAnimal);
    return (
        <div>
            Details
        </div>
    );
};

export default AnimalDetailsPage;