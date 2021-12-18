"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.root = void 0;
var tslib_1 = require("tslib");
var moment_1 = (0, tslib_1.__importDefault)(require("moment"));
var xmlbuilder_1 = (0, tslib_1.__importDefault)(require("xmlbuilder"));
exports.root = {
    urlset: {
        "@xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "@xmlns:news": "http://www.google.com/schemas/sitemap-news/0.9",
        url: [],
    },
};
var genres = ["Blog", "OpEd", "Opinion", "PressRelease", "Satire", "UserGenerated"];
function parse(prepare) {
    return {
        loc: prepare.loc,
        "news:news": {
            "news:publication": {
                "news:language": prepare.news.publication.language,
                "news:name": prepare.news.publication.name,
            },
            "news:title": prepare.news.title,
            "news:publication_date": prepare.news.publication_date,
        },
    };
}
exports.parse = parse;
var GoogleNewsSitemap = /** @class */ (function () {
    function GoogleNewsSitemap() {
        /**
         * Max 1000 items
         */
        this.items = [];
    }
    GoogleNewsSitemap.prototype.add = function (item) {
        if (!item.title && !item.publication_name && item.publication_date)
            return;
        var author = "Dimas Lanjaka (Default User)";
        if (typeof item.publication_name == "string") {
            author = item.publication_name;
        }
        else if (item.publication_name.name) {
            author = item.publication_name.name;
        }
        var build = {
            loc: item.location,
            news: {
                publication: { name: author, language: item.publication_language || "en" },
                publication_date: item.publication_date || (0, moment_1.default)(new Date(), moment_1.default.ISO_8601).format("YYYY-MM-DDTHH:mm:ssZ"),
                title: item.title,
                genres: item.genres || "Blog",
            },
        };
        if (typeof item.keywords == "string") {
            build.news.keywords = item.keywords;
        }
        else if (Array.isArray(item.keywords)) {
            build.news.keywords = item.keywords.join(",");
        }
        exports.root.urlset.url.push(parse(build));
        this.items.push(build);
    };
    GoogleNewsSitemap.prototype.toString = function () {
        return xmlbuilder_1.default.create(exports.root, { version: "1.0", encoding: "UTF-8" }).end({ pretty: true });
    };
    return GoogleNewsSitemap;
}());
exports.default = GoogleNewsSitemap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLCtEQUE0QjtBQUM1Qix1RUFBb0M7QUFHdkIsUUFBQSxJQUFJLEdBQUc7SUFDbEIsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLDZDQUE2QztRQUN2RCxhQUFhLEVBQUUsZ0RBQWdEO1FBQy9ELEdBQUcsRUFBRSxFQUFFO0tBQ1I7Q0FDRixDQUFDO0FBR0YsSUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBVSxDQUFDO0FBK0IvRixTQUFnQixLQUFLLENBQUMsT0FBaUI7SUFDckMsT0FBTztRQUNMLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztRQUNoQixXQUFXLEVBQUU7WUFDWCxrQkFBa0IsRUFBRTtnQkFDbEIsZUFBZSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVE7Z0JBQ2xELFdBQVcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJO2FBQzNDO1lBQ0QsWUFBWSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNoQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtTQUN2RDtLQUNGLENBQUM7QUFDSixDQUFDO0FBWkQsc0JBWUM7QUFrREQ7SUFBQTtRQUNFOztXQUVHO1FBQ0gsVUFBSyxHQUFlLEVBQUUsQ0FBQztJQTZCekIsQ0FBQztJQTVCQywrQkFBRyxHQUFILFVBQUksSUFBbUI7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUFFLE9BQU87UUFDM0UsSUFBSSxNQUFNLEdBQUcsOEJBQThCLENBQUM7UUFDNUMsSUFBSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLEVBQUU7WUFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUNoQzthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtZQUNyQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztTQUNyQztRQUNELElBQU0sS0FBSyxHQUFhO1lBQ3RCLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNsQixJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksRUFBRTtnQkFDMUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUEsZ0JBQU0sRUFBQyxJQUFJLElBQUksRUFBRSxFQUFFLGdCQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDO2dCQUM3RyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU07YUFDOUI7U0FDRixDQUFDO1FBQ0YsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDckM7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFtQixJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoRTtRQUNELFlBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUNFLE9BQU8sb0JBQVUsQ0FBQyxNQUFNLENBQUMsWUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDIn0=