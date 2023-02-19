import {
  extendType,
  floatArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { usePost } from "../utils";

export const Prediction = objectType({
  name: "Prediction",

  definition(t) {
    t.float("prediction");
    t.nonNull.list.field("actual", {
      type: Actual,
    });
  },
});

export const Actual = objectType({
  name: "Actual",

  definition(t) {
    t.int("year");
    t.float("value");
  },
});

export const PredictionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("prediction", {
      type: Prediction,
      args: {
        model: nonNull(stringArg()),
        params: nonNull(list(nonNull(floatArg()))),
      },
      resolve: async (_, { model, params }) => {
        const predictions = await usePost<
          {
            model: string;
            params: number[];
          },
          {
            prediction: number;
            actual: {
              [key: string]: number;
            };
          }
        >("http://localhost:8000/", {
          model,
          params,
        });

        // return predictions.json();
        // const predictions = {
        //   actual: {
        //     "1975": 33.3,
        //     "1981": 32.4,
        //     "1987": 31.5,
        //     "1991": 31.0,
        //     "1994": 31.3,
        //     "1997": 31.6,
        //     "1998": 33.2,
        //     "2000": 33.3,
        //     "2004": 33.7,
        //     "2007": 33.8,
        //     "2010": 33.6,
        //     "2012": 33.5,
        //     "2013": 33.8,
        //     "2014": 33.2,
        //     "2015": 33.7,
        //     "2016": 32.7,
        //     "2017": 33.3,
        //   },
        //   prediction: 33.46884210559999,
        // };

        // transform yes into Prediction type
        const actual = Object.keys(predictions.actual).map((key) => ({
          year: parseInt(key),
          value: predictions.actual[key],
        }));

        return {
          prediction: predictions.prediction,
          actual,
        };
      },
    });
  },
});
