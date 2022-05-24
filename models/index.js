"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todataTDO = void 0;
const todataTDO = (ownedElements) => ownedElements.filter(i => i._type === 'UMLClass').reduce((acc, { name, route, attributes, operations }) => {
    return {
        ...acc,
        [name]: {
            route,
            attributes: Array.isArray(attributes)
                ? attributes.map(({ _id, _type, _parent, name, bo, ...all }) => ({
                    ...all,
                    name,
                    key: name,
                    columns: bo ? { Header: all.form, defaultCanSort: true } : false,
                }))
                : [],
            operations,
        }
    };
}, {});
exports.todataTDO = todataTDO;
//# sourceMappingURL=index.js.map