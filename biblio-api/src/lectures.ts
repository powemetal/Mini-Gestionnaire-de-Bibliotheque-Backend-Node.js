import prisma from "../utils/prisma.js"

//1 tous les livres
async function getTousLesLivres(){
    return prisma.livre.findMany();
}

//2 tous les livres disponibles
async function getTousLesLivresDisponibles(){
    return prisma.livre.findMany({
        where: {
            disponible: true,
        },
    });
}

//3 Un livre pas son id
async function getLivreParId(id: number){
    return prisma.livre.findUnique({
        where: {
            id: id,
        },
    });
}

//4 Recherche partielle par auteur
async function getLivreParAuteur(motCle: string) {
    return prisma.livre.findMany({
        where: {
            auteur: { contains: motCle, mode: "insensitive"},
        },
    });

}

async function main(){
    console.log("\n--- Tous les livres ---");
    console.log(await getTousLesLivres());

    console.log("\n--- Tous les livres disponibles ---");
    console.log(await getTousLesLivresDisponibles());

    console.log("\n--- Livre #1 ---");
    console.log(await getLivreParId(1));

    console.log("--- Recherche 'saint' ---")
    console.log(await getLivreParAuteur("saint"));

    await prisma.$disconnect();

}

main().catch((e) => {
    console.error(e);
    process.exit(1);
})