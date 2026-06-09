import prisma from "../utils/prisma.js";

//Supprimer un livre par id
async function supprimerLivre(id: number) {
    return prisma.livre.delete({
        where: { id },
    });
}

//Supprimer tous les livres anterieurs a une annee
async function supprimerAnciens (avantAnnee: number) {
    return prisma.livre.deleteMany({
        where: { annee: { lt: avantAnnee } },
    });
}

async function main() {
    console.log(await supprimerLivre(1));
    console.log(await supprimerAnciens(2000));
    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
})