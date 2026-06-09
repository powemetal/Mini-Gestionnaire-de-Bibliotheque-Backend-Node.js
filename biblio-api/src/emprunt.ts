import prisma from "../utils/prisma.js";

//Emprunter un livre
async function emprunterLivre(livreId: number, parQui: string){
    
    //creer l'emprunt
    const emprunt = await prisma.emprunt.create({
        data: { livreId, empruntePar: parQui },
    });

    // marquer le livre comme indisponible
    await prisma.livre.update({
        where: { id: livreId },
        data: { disponible: false },
    });
    return emprunt;
}

//Lister tous les emprunts AVEC les infos du livre

async function listerEmprunts() {
    return prisma.emprunt.findMany({
        include: { livre: true }
    });
}

//Retourner un livre: (rendre l'emprunt)
async function rendreLivre ( empruntId : number ) {
    const emprunt = await prisma . emprunt . delete ({
        where : { id : empruntId } ,
    }) ;
    await prisma . livre . update ({
        where : { id : emprunt . livreId } ,
        data : { disponible : true } ,
    }) ;
return emprunt ;
}

async function main() {
    console.log(await emprunterLivre(2, "Johhny 5"));
    console.log(await listerEmprunts());
    console.log(await rendreLivre(1));
    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
})