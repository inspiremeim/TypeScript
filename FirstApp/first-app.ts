let totalCount = 45645;
let isValid = false;
let userName = "Rahul";

let userId: string | number = "abc123";
userId = 1231;

type SON = string | number;
let productId: SON = "abc123";
productId = 1231;

let orderDetail: {
  id: number;
  isDispatch: boolean;
  typ: string;
};

orderDetail = {
  id: 2342,
  isDispatch: false,
  typ: "Offline",
};

type Obj = {
  id: number;
  isDispatch: boolean;
  typ: string;
};

let pDetails: Obj;

pDetails = {
  id: 2342,
  isDispatch: false,
  typ: "Offline",
};

let outDoorGames: Array<string | number | boolean>;
outDoorGames = ["Cricket", "Football", "Baseball", "Golf", 2342243, true];
outDoorGames = [1, 2, 3, 4];

let inDoorGames: (string | number | boolean)[];
inDoorGames = ["Cricket", "Football", "Baseball", "Golf", 2342243, true];
inDoorGames = [1, 2, 3, 4];

function addNumber(a: string, b: number) {
  console.log(a + b);
  return a + b;
}

type typeFun = (a: string, b: number) => string;

function mergeString(a: string, b: number, doProcessing: typeFun) {
  doProcessing(a, b);
}

interface interSchoolCompition {
  schooldId: number;
  schoolName: string;
  isSchoolWonBefore: boolean;
}

// interface interSchoolCompition {
//   feesPaidBySchool: number;
//   whoIsTheMainPlayer: string;
// }

let RayanInternationSchool: interSchoolCompition;

RayanInternationSchool = {
  schooldId: 45,
  schoolName: "Rayan",
  isSchoolWonBefore: false,
};

class AllSchools implements interSchoolCompition {
  schooldId: number;
  schoolName: string;
  isSchoolWonBefore: boolean;

  constructor(id: number, name: string, wonBefore: boolean) {
    this.schooldId = id;
    this.schoolName = name;
    this.isSchoolWonBefore = wonBefore;
  }
}

class AllSchools2 implements interSchoolCompition {
  schooldId!: number;
  schoolName!: string;
  isSchoolWonBefore!: boolean;
  isSchoolAvalable!: boolean;
}

class AllSchools3 implements interSchoolCompition {
  schooldId: number = 0;
  schoolName: string = "";
  isSchoolWonBefore: boolean = false;
}

function getSchoolCompitionDetails(schoolDetails: interSchoolCompition) {}

getSchoolCompitionDetails(new AllSchools2());

type SuperAdmin = {
  permissions: string[];
};

type ChilAdmin = {
  userName: string;
};

type allAdmin = SuperAdmin & ChilAdmin;

let ads: allAdmin;

ads = {
  permissions: ["add", "edit"],
  userName: "Rahul",
};

interface ISuperAdmin {
  permissions: string[];
}

interface IChilAdmin {
  userName: string;
}

interface IAllAdmin extends ISuperAdmin, IChilAdmin {}

let admin: IAllAdmin;

admin = {
  permissions: ["add", "edit"],
  userName: "Rahul",
};

type specificValue = "Balance" | "Equity" | "Profit";

let specificValues: specificValue;

specificValues = "Balance";

function specFun(action: string | number, role: specificValue) {
  if (role === "Equity" && typeof action === "string") {
    console.log("Role is Equity");
  }
}

function specFun_Extension(action: SuperAdmin | ChilAdmin) {
  if ("permissions" in action) {
    console.log("Yes permissions condition checked");
  }
}

let vals: Array<specificValue>;
vals = ["Equity", "Balance"];

type OnlineStore<T> = {
  id: T[];
  add: (data: T) => void;
};

let ClothOnlineStore: OnlineStore<number> = {
  id: [],
  add(data) {
    this.id.push(data);
  },
};

let ShoesOnlineStore: OnlineStore<string> = {
  id: [],
  add(data) {
    this.id.push(data);
  },
};

function CheckValidType<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const CallCVT = CheckValidType({ age: 54 }, { area: "Delhi" });

console.log(CallCVT);
