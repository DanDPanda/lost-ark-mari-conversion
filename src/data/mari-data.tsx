import { MariItemDataType } from "../types/mari-types";

export const createData = (
    itemName: string,
    mariShopBlueStoneCost: number,
    mariShopQuantity: number,
    goldCost: number,
    image: string
): MariItemDataType => {
    const goldPerBlueCrystal = goldCost / 95;
    const blueCrystalPerQuantity = mariShopBlueStoneCost / mariShopQuantity;
    const goldCostOfItem = (goldPerBlueCrystal * blueCrystalPerQuantity).toFixed(2);

    return { itemName, goldCostOfItem, image, mariShopBlueStoneCost, mariShopQuantity };
}

export const getMariItemData = (goldCost: number): MariItemDataType[] => [
    createData('Guardian Stones (10)', 150, 100, goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_6_104.png'),
    createData('Destruction Stones (10)', 300, 50, goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_6_105.png'),
    createData('Greater Honor Leapstones (1)', 50, 5, goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_156.png'),
    createData('Honor Shard Pouch (S) (1)', 112, 20, goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/money_13.png'),
    createData('Solar Grace (1)', 160, 40, goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_161.png'),
    createData('Solar Blessing (1)', 300, 30, goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_162.png'),
    createData('Solar Protections (1)', 360, 8, goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_163.png'),
];