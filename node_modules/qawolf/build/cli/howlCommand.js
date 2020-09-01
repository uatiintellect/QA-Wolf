"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHowlCommand = void 0;
const commander_1 = require("commander");
const wolf = String.raw `
                     .
                    / V\
                  / '  /
                 <<   |
                 /    |
               /      |
             /        |
           /    \  \ /
          (      ) | |
  ________|   _/_  | |
<__________\______)\__)
`;
exports.buildHowlCommand = () => {
    const command = new commander_1.Command('howl')
        .description('🐺')
        .action(() => console.log(wolf));
    return command;
};
//# sourceMappingURL=howlCommand.js.map