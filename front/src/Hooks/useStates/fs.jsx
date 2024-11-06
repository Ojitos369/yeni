import { createSlice } from "@reduxjs/toolkit";

const appName = "reactAppName";

const fs = createSlice({
    name: "fs",
    initialState: {
        s: {},
        ls: localStorage.getItem(appName) ? JSON.parse(localStorage.getItem(appName)) : {theme: 'black'},
    },
    reducers: {
        u0: (s, action) => {
            const { f0, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: value
            }
        },
        u1: (s, action) => {
            const { f0, f1, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: value
                }
            }
        },
        u2: (s, action) => {
            const { f0, f1, f2, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: value
                    }
                }
            }
        },
        u3: (s, action) => {
            const { f0, f1, f2, f3, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.s?.[f0]?.[f1]?.[f2] || {},
                            [f3]: value
                        }
                    }
                }
            }
        },
        u4: (s, action) => {
            const { f0, f1, f2, f3, f4, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.s?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: value
                            }
                        }
                    }
                }
            }
        },
        u5: (s, action) => {
            const { f0, f1, f2, f3, f4, f5, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.s?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: {
                                    ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4] || {},
                                    [f5]: value
                                }
                            }
                        }
                    }
                }
            }
        },
        u6: (s, action) => {
            const { f0, f1, f2, f3, f4, f5, f6, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.s?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: {
                                    ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4] || {},
                                    [f5]: {
                                        ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5] || {},
                                        [f6]: value
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        u7: (s, action) => {
            const { f0, f1, f2, f3, f4, f5, f6, f7, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.s?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: {
                                    ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4] || {},
                                    [f5]: {
                                        ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5] || {},
                                        [f6]: {
                                            ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5]?.[f6] || {},
                                            [f7]: value
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        u8: (s, action) => {
            const { f0, f1, f2, f3, f4, f5, f6, f7, f8, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.s?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: {
                                    ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4] || {},
                                    [f5]: {
                                        ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5] || {},
                                        [f6]: {
                                            ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5]?.[f6] || {},
                                            [f7]: {
                                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5]?.[f6]?.[f7] || {},
                                                [f8]: value
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        u9: (s, action) => {
            const { f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, value } = action.payload;
            s.s = {
                ...s.s,
                [f0]: {
                    ...s.s?.[f0] || {},
                    [f1]: {
                        ...s.s?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.s?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: {
                                    ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4] || {},
                                    [f5]: {
                                        ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5] || {},
                                        [f6]: {
                                            ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5]?.[f6] || {},
                                            [f7]: {
                                                ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5]?.[f6]?.[f7] || {},
                                                [f8]: {
                                                    ...s.s?.[f0]?.[f1]?.[f2]?.[f3]?.[f4]?.[f5]?.[f6]?.[f7]?.[f8] || {},
                                                    [f9]: value
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        lu0: (s, action) => {
            const { f0, value } = action.payload;
            s.ls = {
                ...s.ls,
                [f0]: value
            }
            localStorage.setItem(appName, JSON.stringify(s.ls));
        },
        lu1: (s, action) => {
            const { f0, f1, value } = action.payload;
            s.ls = {
                ...s.ls,
                [f0]: {
                    ...s.ls?.[f0] || {},
                    [f1]: value
                }
            }
            localStorage.setItem(appName, JSON.stringify(s.ls));
        },
        lu2: (s, action) => {
            const { f0, f1, f2, value } = action.payload;
            s.ls = {
                ...s.ls,
                [f0]: {
                    ...s.ls?.[f0] || {},
                    [f1]: {
                        ...s.ls?.[f0]?.[f1] || {},
                        [f2]: value
                    }
                }
            }
            localStorage.setItem(appName, JSON.stringify(s.ls));
        },
        lu3: (s, action) => {
            const { f0, f1, f2, f3, value } = action.payload;
            s.ls = {
                ...s.ls,
                [f0]: {
                    ...s.ls?.[f0] || {},
                    [f1]: {
                        ...s.ls?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.ls?.[f0]?.[f1]?.[f2] || {},
                            [f3]: value
                        }
                    }
                }
            }
            localStorage.setItem(appName, JSON.stringify(s.ls));
        },
        lu4: (s, action) => {
            const { f0, f1, f2, f3, f4, value } = action.payload;
            s.ls = {
                ...s.ls,
                [f0]: {
                    ...s.ls?.[f0] || {},
                    [f1]: {
                        ...s.ls?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.ls?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.ls?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: value
                            }
                        }
                    }
                }
            }
            localStorage.setItem(appName, JSON.stringify(s.ls));
        },
        lu5: (s, action) => {
            const { f0, f1, f2, f3, f4, f5, value } = action.payload;
            s.ls = {
                ...s.ls,
                [f0]: {
                    ...s.ls?.[f0] || {},
                    [f1]: {
                        ...s.ls?.[f0]?.[f1] || {},
                        [f2]: {
                            ...s.ls?.[f0]?.[f1]?.[f2] || {},
                            [f3]: {
                                ...s.ls?.[f0]?.[f1]?.[f2]?.[f3] || {},
                                [f4]: {
                                    ...s.ls?.[f0]?.[f1]?.[f2]?.[f3]?.[f4] || {},
                                    [f5]: value
                                }
                            }
                        }
                    }
                }
            }
            localStorage.setItem(appName, JSON.stringify(s.ls));
        }
    }
});

const { u0, u1, u2, u3, u4, u5, u6, u7, u8, u9, lu0, lu1, lu2, lu3, lu4, lu5 } = fs.actions;
const f = {u0, u1, u2, u3, u4, u5, u6, u7, u8, u9};
const lf = {u0: lu0, u1: lu1, u2: lu2, u3: lu3, u4: lu4, u5: lu5};
// console.log('lf', lf);
const fsReducer = fs.reducer;
export { f, lf, fsReducer };
