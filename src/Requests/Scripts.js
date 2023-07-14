import axios from 'axios';

// TRAERME TODAS LAS CARTAS DE LA API DE MAGIC

export const getAllMagicCard = async (req, res) => {

    const getAllCard = async () => {

        const response = await axios.get(`https://api.magicthegathering.io/v1/cards`)

        return response;
    };
    const result = await getAllCard();

    return (result);
};

// TRAERME UNA DE LAS CARTAS DE LA API DE MAGIC

export const getOneMagicCard = async (req, res) => {
    const { status } = req.query;
    const getOneCard = async () => {

        const response = await axios.get(`${process.env.DATABASE_API_URL}/internal/${process.env.environment}/api/v1/agent/getAgentsToManage?reviewStatus=${status}`, {

        });
        return response.body;

    };
    const result = await getOneCard();
    res.send(result);
};