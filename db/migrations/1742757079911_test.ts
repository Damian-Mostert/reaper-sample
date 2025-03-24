import { Migration } from "reaperjs";

const testMigration = Migration("test",{
    up(blueprint){
        blueprint.id();
    },
    down(blueprint){
        blueprint.dropTable();
    }
});

export default testMigration;
