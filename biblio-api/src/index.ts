import prisma from "../utils/prisma.js"

async function seed() {
    //Todo ajouter au moins 5 livres
    const livre1 = await prisma.livre.create({
        data: {
            titre: "Le petit prince",
            auteur: "Antoine de Saint-Exupéry",
            annee: 1943,
            disponible: true,
        },
    });
    console.log("Cree: ", livre1);

    const livre2 = await prisma.livre.create({
        data: {
            titre: "Harry Potter à l'école des sorciers",
            auteur: "J.K. Rowling",
            annee: 1997,
            disponible: true,
        },
    });
    console.log("Cree: ", livre2);

    const livre3 = await prisma.livre.create({
        data: {
            titre: "1982",
            auteur: "George Orwell",
            annee: 1949,
            disponible: true,
        },
    });
    console.log("Cree: ", livre3);

    const livre4 = await prisma.livre.create({
        data: {
            titre: "Le Seigneur des anneaux",
            auteur: "J.R.R. Tolkien",
            annee: 1954,
            disponible: true,
        },
    });
    console.log("Cree: ", livre4);

    const livre5 = await prisma.livre.create({
        data: {
            titre: "Le bateau ivre",
            auteur:"Edgar Allan poe",
            annee: 1847,
            disponible: true,
        },
    });
    console.log("Cree: ", livre5);

    const livre6 = await prisma.livre.create({
        data: {
            titre: "Tintin au tibet",
            auteur: "Hergé",
            annee: 1939,
            disponible: true,
        },
    });
    console.log("Cree: ", livre6);
}

async function main() {
    await seed();
    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
})

