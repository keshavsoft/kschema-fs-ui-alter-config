import getConfig from "./getConfig.js";

const startFunc = ({ toPath, configPath, inTargetPath, showLog = true,
    inPort, inAction
}) => {
    //toPath and inTargetPath are both needed as they will replace one another for end point generation
    switch (inAction) {
        case "Crud":

            const columnsConfig = getConfig({ configPath });

            break;

        default:

            break;
    };

    return true;
};

export default startFunc;