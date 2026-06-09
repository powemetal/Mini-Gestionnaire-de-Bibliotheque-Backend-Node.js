import prisma from "../utils/prisma.js"


// Marquer un livre comme indisponible (emprunté)
async function marquerIndisponible(id: number) {
    return prisma.livre.update({
        where: { id },
        data: { disponible: false },
    });
}

//Corriger l'entree d'un livre
async function corrierAnnee(id: number, annee: number) {
    return prisma.livre.update({
        where: { id },
        data: { annee },
    });
}


async function main(){
    console.log(await marquerIndisponible(1));
    console.log(await corrierAnnee(2, 2023));
    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
})




