
/*import gql from "graphql-tag";
import apollo from 'apollo-client';

import fetch from "node-fetch";
import apolloHttpLink from "apollo-link-http";
import apolloLinkContext from "apollo-link-context";
import  apolloInMemoryCache from "apollo-cache-inmemory";
//import  classDocuments  from "./ClassDocuments.js";

const graphqlSchema =[
  {
      "kind": "OBJECT",
      "name": "Color",
      "description": null,
      "fields": [
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "rgb",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "transparent",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_color_of_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              
              "type": {
                  "kind": "OBJECT",
                  "name": "Element",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Layer",
      "description": "The user that is currently logged in.",
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "identifier",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "ENUM",
      "name": "Material",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
          {
              "name": "Cardboard_Paper",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Cloth",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Foam",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Metal",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Plastic",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Rubber",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          }
      ],
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "SCALAR",
      "name": "ID",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Element_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "color",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Color_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "image_url",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "part",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Part_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Element_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventoryPart_Collection_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "someHave",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryPart_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "allHave",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryPart_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "InventorySet",
      "description": null,
      "fields": [
          {
              "name": "inventory",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Inventory",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "quantity",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "BigInt",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_inventory_set_of_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Minifig_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "figure_number",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "img_url",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "num_parts",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "SCALAR",
      "name": "Float",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "__Schema",
      "description": null,
      "fields": [
          {
              "name": "types",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "__Type",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "queryType",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "mutationType",
              "description": null,
              "args": [],
              "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "subscriptionType",
              "description": null,
              "args": [],
              "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "directives",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "__Directive",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Inventory_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "inventory_minifigs",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryMinifig_Collection_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "inventory_parts",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryPart_Collection_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "version",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BigIntFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Inventory_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Element",
      "description": null,
      "fields": [
          {
              "name": "color",
              "description": null,
              "args": [],
              "type": {
                  "kind": "OBJECT",
                  "name": "Color",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "image_url",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "part",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Part",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_element_of_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "InventoryPart",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Inventory_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "version",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Part_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "part_number",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INTERFACE",
      "name": "Resource",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [
          {
              "kind": "OBJECT",
              "name": "Database",
              "ofType": null,
              "__typename": "__Type"
          },
          {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Remote",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "head",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Layer",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "Repository",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "SCALAR",
      "name": "String",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Database",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "label",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "comment",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "Resource",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "__Field",
      "description": null,
      "fields": [
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "__InputValue",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "LegoSet_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "description",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "image_url",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "year",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Minifig",
      "description": null,
      "fields": [
          {
              "name": "figure_number",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "img_url",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "num_parts",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "BigInt",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_minifig_of_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "InventoryMinifig",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventorySet_Collection_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "someHave",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventorySet_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "allHave",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventorySet_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "BooleanFilter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "eq",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ne",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Theme",
      "description": null,
      "fields": [
          {
              "name": "image_url",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "parent",
              "description": null,
              "args": [],
              "type": {
                  "kind": "OBJECT",
                  "name": "Theme",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "theme_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "BigInt",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_parent_of_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "OBJECT",
                  "name": "Theme",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_theme_of_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "LegoSet",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Theme_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "image_url",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "theme_id",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventoryMinifig_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "inventory_minifig_id",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "minifig",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Minifig_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "quantity",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BigIntFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryMinifig_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "RelationType_Enum_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "eq",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "RelationType",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ne",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "RelationType",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "PartRelation",
      "description": null,
      "fields": [
          {
              "name": "left",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Part",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "relation_type",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "ENUM",
                      "name": "RelationType",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "right",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Part",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "__Directive",
      "description": null,
      "fields": [
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "locations",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "ENUM",
                              "name": "__DirectiveLocation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "__InputValue",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "onOperation",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": true,
              "deprecationReason": "Use the locations array instead",
              "__typename": "__Field"
          },
          {
              "name": "onFragment",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": true,
              "deprecationReason": "Use the locations array instead",
              "__typename": "__Field"
          },
          {
              "name": "onField",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": true,
              "deprecationReason": "Use the locations array instead",
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventoryMinifig_Collection_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "someHave",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryMinifig_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "allHave",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryMinifig_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Inventory",
      "description": null,
      "fields": [
          {
              "name": "inventory_minifigs",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "inventory_parts",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "version",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "BigInt",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_inventory_of_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "InventorySet",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Minifig_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "figure_number",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "img_url",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "num_parts",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BigIntFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Minifig_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "ENUM",
      "name": "Action",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
          {
              "name": "create_database",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "delete_database",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "class_frame",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "clone",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "fetch",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "push",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "branch",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "rebase",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "instance_read_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "instance_write_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "schema_read_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "schema_write_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "meta_read_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "meta_write_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "commit_read_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "commit_write_access",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "manage_capabilities",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          }
      ],
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "InitialCommit",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "author",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "message",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "timestamp",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "parent",
              "description": null,
              "args": [],
              "type": {
                  "kind": "INTERFACE",
                  "name": "AbstractCommit",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "AbstractCommit",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Element_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "image_url",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Material_Enum_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "eq",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "Material",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ne",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "Material",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "LegoSet_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "description",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "image_url",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "inventory_set",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventorySet_Collection_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "theme",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Theme_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "year",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LegoSet_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "ENUM",
      "name": "Category",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
          {
              "name": "Bars__Ladders_and_Fences",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Baseplates",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Bricks_Sloped",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Belville__Scala_and_Fabuland",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Bricks_Curved",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Bricks_Round_and_Cones",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Bricks_Special",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Bricks_Wedged",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Bricks",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Clikits",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Containers",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Duplo__Quatro_and_Primo",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Electronics",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Flags__Signs__Plastics_and_Cloth",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "HO_Scale",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Hinges__Arms_and_Turntables",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Large_Buildable_Figures",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Magnets_and_Holders",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Mechanical",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minidoll_Heads",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minidoll_Lower_Body",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minidoll_Upper_Body",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minifig_Accessories",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minifig_Heads",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minifig_Headwear",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minifig_Lower_Body",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minifig_Upper_Body",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Minifigs",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Modulex",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Non_Buildable_Figures__Duplo__Fabuland__etc_",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Non_LEGO",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Other",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Panels",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Plants_and_Animals",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Plates_Angled",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Plates_Round_Curved_and_Dishes",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Plates_Special",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Plates",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Pneumatics",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Projectiles___Launchers",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Rock",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Stickers",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "String__Bands_and_Reels",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Supports__Girders_and_Cranes",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Axles",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Beams_Special",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Beams",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Bricks",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Bushes",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Connectors",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Gears",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Panels",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Pins",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Special",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Technic_Steering__Suspension_and_Engine",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Tiles_Round_and_Curved",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Tiles_Special",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Tiles",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Tools",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Transportation___Land",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Transportation___Sea_and_Air",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Tubes_and_Hoses",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Wheels_and_Tyres",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Windows_and_Doors",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Windscreens_and_Fuselage",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Znap",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          }
      ],
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Theme_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "image_url",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "parent",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Theme_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "theme_id",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BigIntFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Theme_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "__Type",
      "description": null,
      "fields": [
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "kind",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "ENUM",
                      "name": "__TypeKind",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "fields",
              "description": null,
              "args": [
                  {
                      "name": "includeDeprecated",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "Boolean",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": "false",
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "OBJECT",
                          "name": "__Field",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "ofType",
              "description": null,
              "args": [],
              "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "inputFields",
              "description": null,
              "args": [],
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "OBJECT",
                          "name": "__InputValue",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "interfaces",
              "description": null,
              "args": [],
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "OBJECT",
                          "name": "__Type",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "possibleTypes",
              "description": null,
              "args": [],
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "OBJECT",
                          "name": "__Type",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "enumValues",
              "description": null,
              "args": [
                  {
                      "name": "includeDeprecated",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "Boolean",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": "false",
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "OBJECT",
                          "name": "__EnumValue",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Branch",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "log",
              "description": null,
              "args": [
                  {
                      "name": "offset",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "INTERFACE",
                              "name": "AbstractCommit",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "head",
              "description": null,
              "args": [],
              "type": {
                  "kind": "INTERFACE",
                  "name": "AbstractCommit",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "StringFilter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "eq",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ne",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "lt",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "le",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "gt",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ge",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "regex",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "startsWith",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "allOfTerms",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "SCALAR",
                          "name": "String",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "anyOfTerms",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "SCALAR",
                          "name": "String",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "PartRelation_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "left",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Part_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "relation_type",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "RelationType_Enum_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "right",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Part_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PartRelation_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INTERFACE",
      "name": "AbstractCommit",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "author",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "message",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "timestamp",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "parent",
              "description": null,
              "args": [],
              "type": {
                  "kind": "INTERFACE",
                  "name": "AbstractCommit",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [
          {
              "kind": "OBJECT",
              "name": "InitialCommit",
              "ofType": null,
              "__typename": "__Type"
          },
          {
              "kind": "OBJECT",
              "name": "Commit",
              "ofType": null,
              "__typename": "__Type"
          },
          {
              "kind": "OBJECT",
              "name": "InvalidCommit",
              "ofType": null,
              "__typename": "__Type"
          },
          {
              "kind": "OBJECT",
              "name": "ValidCommit",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Role",
      "description": "The user that is currently logged in.",
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "action",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "ENUM",
                              "name": "Action",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "SCALAR",
      "name": "Int",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Query",
      "description": null,
      "fields": [
          {
              "name": "Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_system",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "System",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "ENUM",
      "name": "TerminusOrdering",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
          {
              "name": "ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          }
      ],
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Part_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "category",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Category_Enum_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "material",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Material_Enum_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "part_number",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Part_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "InventoryPart",
      "description": null,
      "fields": [
          {
              "name": "element",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Element",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "inventory_part_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "quantity",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "BigInt",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "spare",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_inventory_parts_of_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventoryPart_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "inventory_part_id",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "quantity",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "spare",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "LegoSet",
      "description": null,
      "fields": [
          {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "image_url",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "inventory_set",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "theme",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Theme",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "year",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Color_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "rgb",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "transparent",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Commit",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "author",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "message",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "timestamp",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "parent",
              "description": null,
              "args": [],
              "type": {
                  "kind": "INTERFACE",
                  "name": "AbstractCommit",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "AbstractCommit",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "InvalidCommit",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "author",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "message",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "timestamp",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "parent",
              "description": null,
              "args": [],
              "type": {
                  "kind": "INTERFACE",
                  "name": "AbstractCommit",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "AbstractCommit",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "SCALAR",
      "name": "Boolean",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "BigIntFilter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "eq",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "BigInt",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ne",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "BigInt",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "lt",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "BigInt",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "le",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "BigInt",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "gt",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "BigInt",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ge",
              "description": null,
              "type": {
                  "kind": "SCALAR",
                  "name": "BigInt",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "ENUM",
      "name": "RelationType",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
          {
              "name": "Alternate",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Mold",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Pair",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Pattern",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Print",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "Sub_Part",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          }
      ],
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Category_Enum_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "eq",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "Category",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "ne",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "Category",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "__InputValue",
      "description": null,
      "fields": [
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "defaultValue",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "ValidCommit",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "author",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "message",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "timestamp",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "parent",
              "description": null,
              "args": [],
              "type": {
                  "kind": "INTERFACE",
                  "name": "AbstractCommit",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "AbstractCommit",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "InventoryMinifig",
      "description": null,
      "fields": [
          {
              "name": "inventory_minifig_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "minifig",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Minifig",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "quantity",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "BigInt",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_inventory_minifigs_of_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventoryMinifig_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "inventory_minifig_id",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "quantity",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Capability",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "role",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Role",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "scope",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "INTERFACE",
                      "name": "Resource",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventoryPart_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "element",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Element_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "inventory_part_id",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "quantity",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BigIntFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "spare",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BooleanFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventoryPart_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "ENUM",
      "name": "__TypeKind",
      "description": "GraphQL type kind\n\nThe GraphQL specification defines a number of type kinds - the meta type of a type.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
          {
              "name": "SCALAR",
              "description": "## Scalar types\n\nScalar types appear as the leaf nodes of GraphQL queries. Strings, numbers, and booleans are the built in types, and while it's possible to define your own, it's relatively uncommon.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "OBJECT",
              "description": "## Object types\n\nThe most common type to be implemented by users. Objects have fields and can implement interfaces.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "INTERFACE",
              "description": "## Interface types\n\nInterface types are used to represent overlapping fields between multiple types, and can be queried for their concrete type.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "UNION",
              "description": "## Union types\n\nUnions are similar to interfaces but can not contain any fields on their own.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "ENUM",
              "description": "## Enum types\n\nLike scalars, enum types appear as the leaf nodes of GraphQL queries.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "INPUT_OBJECT",
              "description": "## Input objects\n\nRepresents complex values provided in queries _into_ the system.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "LIST",
              "description": "## List types\n\nRepresent lists of other types. This library provides implementations for vectors and slices, but other Rust types can be extended to serve as GraphQL lists.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "NON_NULL",
              "description": "## Non-null types\n\nIn GraphQL, nullable types are the default. By putting a `!` after a type, it becomes non-nullable.",
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          }
      ],
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "SCALAR",
      "name": "BigInt",
      "description": "The `BigInt` scalar type represents non-fractional signed whole numeric values.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventorySet_Ordering",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "quantity",
              "description": null,
              "type": {
                  "kind": "ENUM",
                  "name": "TerminusOrdering",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Part",
      "description": null,
      "fields": [
          {
              "name": "category",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "ENUM",
                      "name": "Category",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "material",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "ENUM",
                      "name": "Material",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "part_number",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_left_of_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "PartRelation",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_part_of_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Element",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_right_of_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "PartRelation",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Color",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Color",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Element",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Element_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Element",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Inventory",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Inventory_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Inventory",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryMinifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryMinifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryMinifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventoryPart",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventoryPart_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventoryPart",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_InventorySet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "InventorySet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_LegoSet",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "LegoSet_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "LegoSet",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Minifig",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Minifig_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Minifig",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Part",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Part_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Part",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_PartRelation",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "PartRelation_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "PartRelation",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_path_to_Theme",
              "description": null,
              "args": [
                  {
                      "name": "id",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "ID",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "ids",
                      "description": null,
                      "type": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "SCALAR",
                                  "name": "ID",
                                  "ofType": null,
                                  "__typename": "__Type"
                              },
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "offset",
                      "description": "skip N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "limit",
                      "description": "limit results to N elements",
                      "type": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "filter",
                      "description": null,
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "orderBy",
                      "description": "order by the given fields",
                      "type": {
                          "kind": "INPUT_OBJECT",
                          "name": "Theme_Ordering",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  },
                  {
                      "name": "path",
                      "description": null,
                      "type": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Theme",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "_id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Organization",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "database",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Database",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "child",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Organization",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "Resource",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "__EnumValue",
      "description": null,
      "fields": [
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "InventorySet_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "inventory",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Inventory_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "quantity",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BigIntFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "InventorySet_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "InventorySet_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "Local",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "head",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Layer",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [
          {
              "kind": "INTERFACE",
              "name": "Repository",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "User",
      "description": "The user that is currently logged in.",
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": "The name of the user that is currently logged in.",
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "capability",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Capability",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INPUT_OBJECT",
      "name": "Color_Filter",
      "description": null,
      "fields": null,
      "inputFields": [
          {
              "name": "name",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "rgb",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StringFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "transparent",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BooleanFilter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_and",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_or",
              "description": null,
              "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "Color_Filter",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          },
          {
              "name": "_not",
              "description": null,
              "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "Color_Filter",
                  "ofType": null,
                  "__typename": "__Type"
              },
              "defaultValue": null,
              "__typename": "__InputValue"
          }
      ],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "OBJECT",
      "name": "System",
      "description": null,
      "fields": [
          {
              "name": "user",
              "description": "Get the user that is currently logged in.",
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "User",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "repository",
              "description": null,
              "args": [
                  {
                      "name": "name",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "String",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "INTERFACE",
                              "name": "Repository",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "branch",
              "description": null,
              "args": [
                  {
                      "name": "name",
                      "description": null,
                      "type": {
                          "kind": "SCALAR",
                          "name": "String",
                          "ofType": null,
                          "__typename": "__Type"
                      },
                      "defaultValue": null,
                      "__typename": "__InputValue"
                  }
              ],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                          "kind": "NON_NULL",
                          "name": null,
                          "ofType": {
                              "kind": "OBJECT",
                              "name": "Branch",
                              "ofType": null,
                              "__typename": "__Type"
                          },
                          "__typename": "__Type"
                      },
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "ENUM",
      "name": "__DirectiveLocation",
      "description": null,
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [
          {
              "name": "QUERY",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "MUTATION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "SUBSCRIPTION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "FIELD",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "FRAGMENT_DEFINITION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "FRAGMENT_SPREAD",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          },
          {
              "name": "INLINE_FRAGMENT",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__EnumValue"
          }
      ],
      "possibleTypes": null,
      "__typename": "__Type"
  },
  {
      "kind": "INTERFACE",
      "name": "Repository",
      "description": null,
      "fields": [
          {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          },
          {
              "name": "head",
              "description": null,
              "args": [],
              "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                      "kind": "OBJECT",
                      "name": "Layer",
                      "ofType": null,
                      "__typename": "__Type"
                  },
                  "__typename": "__Type"
              },
              "isDeprecated": false,
              "deprecationReason": null,
              "__typename": "__Field"
          }
      ],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [
          {
              "kind": "OBJECT",
              "name": "Remote",
              "ofType": null,
              "__typename": "__Type"
          },
          {
              "kind": "OBJECT",
              "name": "Local",
              "ofType": null,
              "__typename": "__Type"
          }
      ],
      "__typename": "__Type"
  }
]

const classFrame = {
  "@context": {
      "@base": "terminusdb:///lego/data/",
      "@schema": "terminusdb:///lego/schema#",
      "@type": "Context"
  },
  "Category": {
      "@type": "Enum",
      "@values": [
          "Bars, Ladders and Fences",
          "Baseplates",
          "Bricks Sloped",
          "Belville, Scala and Fabuland",
          "Bricks Curved",
          "Bricks Round and Cones",
          "Bricks Special",
          "Bricks Wedged",
          "Bricks",
          "Clikits",
          "Containers",
          "Duplo, Quatro and Primo",
          "Electronics",
          "Flags, Signs, Plastics and Cloth",
          "HO Scale",
          "Hinges, Arms and Turntables",
          "Large Buildable Figures",
          "Magnets and Holders",
          "Mechanical",
          "Minidoll Heads",
          "Minidoll Lower Body",
          "Minidoll Upper Body",
          "Minifig Accessories",
          "Minifig Heads",
          "Minifig Headwear",
          "Minifig Lower Body",
          "Minifig Upper Body",
          "Minifigs",
          "Modulex",
          "Non-Buildable Figures (Duplo, Fabuland, etc)",
          "Non-LEGO",
          "Other",
          "Panels",
          "Plants and Animals",
          "Plates Angled",
          "Plates Round Curved and Dishes",
          "Plates Special",
          "Plates",
          "Pneumatics",
          "Projectiles / Launchers",
          "Rock",
          "Stickers",
          "String, Bands and Reels",
          "Supports, Girders and Cranes",
          "Technic Axles",
          "Technic Beams Special",
          "Technic Beams",
          "Technic Bricks",
          "Technic Bushes",
          "Technic Connectors",
          "Technic Gears",
          "Technic Panels",
          "Technic Pins",
          "Technic Special",
          "Technic Steering, Suspension and Engine",
          "Tiles Round and Curved",
          "Tiles Special",
          "Tiles",
          "Tools",
          "Transportation - Land",
          "Transportation - Sea and Air",
          "Tubes and Hoses",
          "Wheels and Tyres",
          "Windows and Doors",
          "Windscreens and Fuselage",
          "Znap"
      ]
  },
  "Color": {
      "@type": "Class",
      "name": "xsd:string",
      "rgb": "xsd:string",
      "transparent": "xsd:boolean"
  },
  "Element": {
      "@type": "Class",
      "color": {
          "@class": "Color",
          "@type": "Optional"
      },
      "image_url": {
          "@class": "xsd:anyURI",
          "@type": "Optional"
      },
      "part": "Part"
  },
  "Inventory": {
      "@type": "Class",
      "inventory_minifigs": {
          "@class": {
              "@class": "InventoryMinifig",
              "@subdocument": []
          },
          "@type": "Set"
      },
      "inventory_parts": {
          "@class": {
              "@class": "InventoryPart",
              "@subdocument": []
          },
          "@type": "Set"
      },
      "version": "xsd:positiveInteger"
  },
  "InventoryMinifig": {
      "@key": {
          "@fields": [
              "inventory_minifig_id"
          ],
          "@type": "Lexical"
      },
      "@subdocument": [],
      "@type": "Class",
      "inventory_minifig_id": "xsd:string",
      "minifig": "Minifig",
      "quantity": "xsd:positiveInteger"
  },
  "InventoryPart": {
      "@key": {
          "@fields": [
              "inventory_part_id"
          ],
          "@type": "Lexical"
      },
      "@subdocument": [],
      "@type": "Class",
      "element": "Element",
      "inventory_part_id": "xsd:string",
      "quantity": "xsd:positiveInteger",
      "spare": "xsd:boolean"
  },
  "InventorySet": {
      "@key": {
          "@type": "Random"
      },
      "@subdocument": [],
      "@type": "Class",
      "inventory": "Inventory",
      "quantity": "xsd:positiveInteger"
  },
  "LegoSet": {
      "@type": "Class",
      "description": {
          "@class": "xsd:string",
          "@type": "Optional"
      },
      "image_url": {
          "@class": "xsd:anyURI",
          "@type": "Optional"
      },
      "inventory_set": {
          "@class": {
              "@class": "InventorySet",
              "@subdocument": []
          },
          "@type": "Set"
      },
      "name": "xsd:string",
      "theme": "Theme",
      "year": "xsd:gYear"
  },
  "Material": {
      "@type": "Enum",
      "@values": [
          "Cardboard/Paper",
          "Cloth",
          "Foam",
          "Metal",
          "Plastic",
          "Rubber"
      ]
  },
  "Minifig": {
      "@key": {
          "@fields": [
              "figure_number"
          ],
          "@type": "Lexical"
      },
      "@type": "Class",
      "figure_number": "xsd:string",
      "img_url": "xsd:anyURI",
      "name": "xsd:string",
      "num_parts": {
          "@class": "xsd:positiveInteger",
          "@type": "Optional"
      }
  },
  "Part": {
      "@key": {
          "@fields": [
              "part_number"
          ],
          "@type": "Lexical"
      },
      "@type": "Class",
      "category": {
          "@id": "Category",
          "@type": "Enum",
          "@values": [
              "Bars, Ladders and Fences",
              "Baseplates",
              "Bricks Sloped",
              "Belville, Scala and Fabuland",
              "Bricks Curved",
              "Bricks Round and Cones",
              "Bricks Special",
              "Bricks Wedged",
              "Bricks",
              "Clikits",
              "Containers",
              "Duplo, Quatro and Primo",
              "Electronics",
              "Flags, Signs, Plastics and Cloth",
              "HO Scale",
              "Hinges, Arms and Turntables",
              "Large Buildable Figures",
              "Magnets and Holders",
              "Mechanical",
              "Minidoll Heads",
              "Minidoll Lower Body",
              "Minidoll Upper Body",
              "Minifig Accessories",
              "Minifig Heads",
              "Minifig Headwear",
              "Minifig Lower Body",
              "Minifig Upper Body",
              "Minifigs",
              "Modulex",
              "Non-Buildable Figures (Duplo, Fabuland, etc)",
              "Non-LEGO",
              "Other",
              "Panels",
              "Plants and Animals",
              "Plates Angled",
              "Plates Round Curved and Dishes",
              "Plates Special",
              "Plates",
              "Pneumatics",
              "Projectiles / Launchers",
              "Rock",
              "Stickers",
              "String, Bands and Reels",
              "Supports, Girders and Cranes",
              "Technic Axles",
              "Technic Beams Special",
              "Technic Beams",
              "Technic Bricks",
              "Technic Bushes",
              "Technic Connectors",
              "Technic Gears",
              "Technic Panels",
              "Technic Pins",
              "Technic Special",
              "Technic Steering, Suspension and Engine",
              "Tiles Round and Curved",
              "Tiles Special",
              "Tiles",
              "Tools",
              "Transportation - Land",
              "Transportation - Sea and Air",
              "Tubes and Hoses",
              "Wheels and Tyres",
              "Windows and Doors",
              "Windscreens and Fuselage",
              "Znap"
          ]
      },
      "material": {
          "@id": "Material",
          "@type": "Enum",
          "@values": [
              "Cardboard/Paper",
              "Cloth",
              "Foam",
              "Metal",
              "Plastic",
              "Rubber"
          ]
      },
      "name": "xsd:string",
      "part_number": "xsd:string"
  },
  "PartRelation": {
      "@type": "Class",
      "left": "Part",
      "relation_type": {
          "@id": "RelationType",
          "@type": "Enum",
          "@values": [
              "Alternate",
              "Mold",
              "Pair",
              "Pattern",
              "Print",
              "Sub-Part"
          ]
      },
      "right": "Part"
  },
  "RelationType": {
      "@type": "Enum",
      "@values": [
          "Alternate",
          "Mold",
          "Pair",
          "Pattern",
          "Print",
          "Sub-Part"
      ]
  },
  "Theme": {
      "@key": {
          "@fields": [
              "theme_id",
              "name"
          ],
          "@type": "Lexical"
      },
      "@type": "Class",
      "image_url": {
          "@class": "xsd:anyURI",
          "@type": "Optional"
      },
      "name": "xsd:string",
      "parent": {
          "@class": "Theme",
          "@type": "Optional"
      },
      "theme_id": "xsd:positiveInteger"
  }
}


const authLink = apolloLinkContext.setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: "Basic Y29sbGFib3JhdG9yOmRlbW8="
    }
  }
});

const httpLink = apolloHttpLink.createHttpLink({
  uri: "http://localhost:6363/api/graphql/terminuscms/lego",
  fetch: fetch
});

const client = new apollo.ApolloClient({
  link: authLink.concat(httpLink),
  cache: new apolloInMemoryCache.InMemoryCache()
});


const runQuery = async (req, res) => {
  /*if (!req.body || !req.body.query) {
    res.sendStatus(500);
    return;
  }

  const query = gql(req.body.query);

  let variables = undefined;
  if (req.body.variables) {
    / = JSON.parse(decodeURIComponent(req.body.variables));
  }*/
/*
  const query = gql( `{__schema
                          { types{...FullType}
                            directives{name description locations args{...InputValue}}}}
                            fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}`);





  try {
    const result = await client.query({
      query
    });

   // const schema = buildSchema(`type A { name: String }`)
    formatSchema(result)
   
   // res.json(result);
  } catch (err) {
    console.log(err);
   // res.sendStatus(500).send(JSON.stringify(err));
  }
};

const COLOR_QUERY = gql`
  query ColorQuery($offset: Int, $limit: Int,$filter:Color_Filter) {
    Color(offset: $offset, limit: $limit,filter:$filter) {
        _id
        rgb
        name
    }
}`

//"part": "Part";

function formatQueryFromClassDocument(){
  const objQuery = {}
  const objEnum ={}
  const objSubDoc= {}

  function getClassName (classType,item){
    //console.log(classType)
    let className = classType
    if(typeof classType === "object"){
        if(classType["@type"] === "Enum"){
           return item
        }
        className =  classType['@class']
    }
    if(typeof className === "object"){
       className = className['@class']
    }
    //in this case it is class type
    if(className.indexOf(":") === -1){
      item = `${item} {
                  _id
                }`
    }
    return item
  }

  if(classFrame["@context"]){
      delete classFrame["@context"]
  }

  const classFrameKeys = Object.keys(classFrame)

  classFrameKeys.forEach(id =>{
     
    const classObj = classFrame[id]
    //getClassName(classFrame[item])
     // const id =classObj['@id']
    const type =classObj['@type']

    const fieldsList =[]
  
    const fieldsKeys = Object.keys(classObj)
    if(type!=="Enum" || !classObj["@subdocument"]){
       
        fieldsKeys.forEach(item=>{
            if(!item.startsWith("@")){
              const itemField = getClassName(classObj[item],item)
              fieldsList.push(itemField)
            }
      })
    }

    // console.log("test", fieldsList)
    //Element_Filter
      objQuery[id] = {query:`
          query ${id}Query($offset: Int, $limit: Int, $filter:${id}_Filter, $orderBy:${id}_Ordering ){
            ${id}(offset: $offset, limit: $limit, filter:$filter, orderBy:$orderBy){
              _id
              ${fieldsList.join(" \n ")}
            }
      }`}
})
console.log(JSON.stringify(objQuery,null,4))
}

/*
  classDocuments.forEach(classObj =>{
      const id =classObj['@id']
      const type =classObj['@type']

      const fieldsList =[]

      const fieldsKeys = Object.keys(classObj)

      fieldsKeys.forEach(item=>{
          if(item.startsWith("@") === false){
              // if this is true it is a class
              const className = getClassName(classObj[item])

              if(className(":") === -1){
                  fieldsList.push(`${item} {
                                      _id
                                     }`)
              }else{
                fieldsList.push(item)
              }
          }
      })
*/
/*
  function getOfType(ofType){
        if(ofType && ofType.name) return ofType.name
        if(ofType.ofType)return getOfType(ofType.ofType)
        return "notype"
  }

  function getType(field){
        if(field.type){
            if(field.type.name) return field.type.name
            if(field.type.ofType) return getOfType(field.type.ofType)
        }
  }

  const advancedSearchMatchType = {
    String: {
        label: 'replaceLabel',
        type: 'text',
        valueSources: ['value'],
    },
    BigInt: {
            label: 'replaceLabel',
            type: 'number',
            valueSources: ['value'],
            //operators: ['equal']
    },
    ENUM:{
        label: 'replaceLabel',
        valueSources: ['value'],
        operators: ["select_equals", "select_not_equals"],
        defaultOperator: "select_equals",
        type: "select",      
        fieldSettings: {
            listValues: []
        }
    },
    "OBJECT":{
        label: "replaceLabel",
        type: "!group",
        subfields: {
        }
    }
}

  function formatSchema (result){


    const types = result.data["__schema"].types
   // console.log(JSON.stringify(types,null,4))

    const typesObj = {}

    types.forEach((item=>{

        typesObj[item.name] = {type:item.kind}
        if(item.name === "Inventory"){
            console.log(item.name)
        }
        const fieldsObj ={}
        if(item.fields){
            item.fields.forEach(field=>{
                if(field.name.startsWith("_" ) === false && field.args && field.args.length===0){
                    fieldsObj[field.name] = getType(field)
                }
                //.type && field.type.ofType ? field.type.ofType.name : "notype"

            })

            typesObj[item.name].fields = fieldsObj
        }else if(item.enumValues){
            const enumValues= []
            item.enumValues.forEach(enumValue=>{
                enumValues.push(enumValue.name)
            })
            typesObj[item.name].values = enumValues
        }


        
    }))

   // console.log(JSON.stringify(typesObj,null,4))
   // return 
   
    //primitive fields
    function advSearchFilterFormatter (typesObj,fieldKey,fieldTypeValue){
        const advancedSearchObj = {}
        if(advancedSearchMatchType[fieldTypeValue]){
            let advField = Object.assign({}, advancedSearchMatchType[fieldTypeValue])
            advField.label = fieldKey
            return advField //.push (advField)
         }else if (typesObj[fieldTypeValue] && typesObj[fieldTypeValue].type==="ENUM"){
             let advField = Object.assign({}, advancedSearchMatchType["ENUM"])
             advField.label = fieldKey
             advField.fieldSettings.listValues = typesObj[fieldTypeValue].values
             return advField 

        }
    }

    const  objQuery = {}
    const typesObjKeys = Object.keys(typesObj)
    const advancedSearchObj = {} 

    typesObjKeys.forEach(key =>{
        const itemObj =  typesObj[key]
        const fieldsArr= []
        if(itemObj.type ==="OBJECT"){

            const fieldsKeys = Object.keys(itemObj.fields)
            const fieldKeysArr = []
            if(!advancedSearchObj[key]){
                advancedSearchObj[key]={}
            }

            fieldsKeys.forEach(fieldKey=>{
                const fieldTypeValue = itemObj.fields[fieldKey]
                if(typesObj[fieldTypeValue] && typesObj[fieldTypeValue].type==="OBJECT"){
                    const linkedDocument = typesObj[fieldTypeValue]
                    const name = typesObj[fieldTypeValue].fields['name']  ? "name" : ""
                    fieldKeysArr.push(`${fieldKey}{
                                         _id
                                         ${name}
                                      }`)
                    
                    let advField = JSON.parse(JSON.stringify(advancedSearchMatchType["OBJECT"]))
                    advField.label = fieldKey

                    advancedSearchObj[key][fieldKey] = advField

                   if(typesObj[fieldTypeValue]){
                     const subfields = typesObj[fieldTypeValue].fields
                     const subfieldsKeys = Object.keys(subfields)
                     subfieldsKeys.forEach(sub=>{
                        const subTypeValue = subfields[sub]
                        advField.subfields[sub] = advSearchFilterFormatter(typesObj,sub,subTypeValue)
                     })
                   }
                     //   advField.subfields =advancedSearchObj[fieldTypeValue] ;
                    //}else{
                       // advancedSearchObj[fieldTypeValue]={}
                       // advField.subfields =advancedSearchObj[fieldTypeValue] ;
                    //}

                }else{
                    //return primityve type 
                    advancedSearchObj[key][fieldKey] = advSearchFilterFormatter(typesObj,fieldKey,fieldTypeValue)
                    fieldKeysArr.push(fieldKey)
                }

            })

            const filter = typesObj[`${key}_Filter`] ?  `, $filter:${key}_Filter` : ""
            const filterVar = typesObj[`${key}_Filter`] ?  `, filter:$filter` : ""

            const order = typesObj[`${key}_Ordering`] ?  `, $orderBy:${key}_Ordering` : ""
            const orderVar = typesObj[`${key}_Ordering`] ?  `, orderBy:$orderBy` : ""


            objQuery[key] = {query:`
            query ${key}Query($offset: Int, $limit: Int ${filter} ${order} ){
              ${key}(offset: $offset, limit: $limit ${filterVar} ${orderVar}){
                _id
                ${fieldKeysArr.join(" \n ")}
              }
            }`
            }
        }
    })

    console.log(JSON.stringify(objQuery,null,4),JSON.stringify(advancedSearchObj,null,4))

   

    
//formatQueryFromClassDocument()

 /*   const objQuery = {}
    const objEnum ={}
    const objSubDoc= {}

    types.forEach(item =>{
       const name = item.name
       const fields = item.fields
       switch(item.type){
          case "ENUM":
            break;
          case "OBJECT":

            objQuery[name] = `query ${name}Query($offset: Int, $limit: Int,)`

            let fieldArr = []

            fields.forEach(field =>{
                const fieldName = field.name
                fieldArr.push(fieldName)

            })
            break;
            
       }

    })*/

//}

//runQuery()