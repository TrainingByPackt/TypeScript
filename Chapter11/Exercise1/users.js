var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const userData = [
    { id: 1, email: "test@test1.com" },
    { id: 2, email: "test@test2.com" },
    { id: 3, email: "test@test3.com" },
    { id: 4, email: "test@test4.com" },
    { id: 5, email: "test@test5.com" }
];
export function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(res => {
            setTimeout(() => {
                res(userData[id]);
            }, 1000);
        });
    });
}
const query = () => {
    const ids = [1, 4, 5];
    return ids.map((id) => __awaiter(this, void 0, void 0, function* () {
        const item = yield getUser(id);
        if (item) {
            return `ID: ${item.id} Email: ${item.email}`;
        }
        else {
            return "Loading...";
        }
    }));
};
query(); //?
