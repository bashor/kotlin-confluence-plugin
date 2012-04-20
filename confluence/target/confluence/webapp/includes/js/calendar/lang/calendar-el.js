// ** I18N
Calendar._DN = new Array
("\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae",
 "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1",
 "\u03a4\u03c1\u03af\u03c4\u03b7",
 "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7",
 "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7",
 "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae",
 "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf",
 "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae");

Calendar._SDN = new Array
("\u039a\u03c5",
 "\u0394\u03b5",
 "T\u03c1",
 "\u03a4\u03b5",
 "\u03a0\u03b5",
 "\u03a0\u03b1",
 "\u03a3\u03b1",
 "\u039a\u03c5");

Calendar._MN = new Array
("\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
 "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
 "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
 "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2",
 "\u039c\u03ac\u03ca\u03bf\u03c2",
 "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2",
 "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2",
 "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2",
 "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
 "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2",
 "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
 "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2");

Calendar._SMN = new Array
("\u0399\u03b1\u03bd",
 "\u03a6\u03b5\u03b2",
 "\u039c\u03b1\u03c1",
 "\u0391\u03c0\u03c1",
 "\u039c\u03b1\u03b9",
 "\u0399\u03bf\u03c5\u03bd",
 "\u0399\u03bf\u03c5\u03bb",
 "\u0391\u03c5\u03b3",
 "\u03a3\u03b5\u03c0",
 "\u039f\u03ba\u03c4",
 "\u039d\u03bf\u03b5",
 "\u0394\u03b5\u03ba");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "\u0393\u03b9\u03b1 \u03c4\u03bf \u03b7\u03bc\u03b5\u03c1\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf";

Calendar._TT["ABOUT"] =
"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03b1\u03c2 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1\u03c2/\u03ce\u03c1\u03b1\u03c2 \u03c3\u03b5 DHTML\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"\u0393\u03b9\u03b1 \u03c4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03ad\u03ba\u03b4\u03bf\u03c3\u03b7: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1\u03c2:\n" +
"- \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03ac \xab, \xbb \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ad\u03c4\u03bf\u03c5\u03c2\n" +
"- \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03ac " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bc\u03ae\u03bd\u03b1\n" +
"- \u039a\u03c1\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03c0\u03bf\u03bd\u03c4\u03b9\u03ba\u03bf\u03cd \u03c0\u03b1\u03c4\u03b7\u03bc\u03ad\u03bd\u03bf \u03c3\u03c4\u03b1 \u03c0\u03b1\u03c1\u03b1\u03c0\u03ac\u03bd\u03c9 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03ac \u03b3\u03b9\u03b1 \u03c0\u03b9\u03bf \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b7 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ce\u03c1\u03b1\u03c2:\n" +
"- \u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03c3\u03b5 \u03ad\u03bd\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b1 \u03bc\u03ad\u03c1\u03b7 \u03c4\u03b7\u03c2 \u03ce\u03c1\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03b1\u03cd\u03be\u03b7\u03c3\u03b7\n" +
"- \u03ae Shift-\u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bc\u03b5\u03af\u03c9\u03c3\u03b7\n" +
"- \u03ae \u03ba\u03bb\u03b9\u03ba \u03ba\u03b1\u03b9 \u03bc\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c0\u03b9\u03bf \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b7 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae.";
Calendar._TT["TOGGLE"] = "\u039c\u03c0\u03ac\u03c1\u03b1 \u03c0\u03c1\u03ce\u03c4\u03b7\u03c2 \u03b7\u03bc\u03ad\u03c1\u03b1\u03c2 \u03c4\u03b7\u03c2 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1\u03c2";
Calendar._TT["PREV_YEAR"] = "\u03a0\u03c1\u03bf\u03b7\u03b3. \u03ad\u03c4\u03bf\u03c2 (\u03ba\u03c1\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bc\u03b5\u03bd\u03bf\u03cd)";
Calendar._TT["PREV_MONTH"] = "\u03a0\u03c1\u03bf\u03b7\u03b3. \u03bc\u03ae\u03bd\u03b1\u03c2 (\u03ba\u03c1\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bc\u03b5\u03bd\u03bf\u03cd)";
Calendar._TT["GO_TODAY"] = "\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1";
Calendar._TT["NEXT_MONTH"] = "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2 (\u03ba\u03c1\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bc\u03b5\u03bd\u03bf\u03cd)";
Calendar._TT["NEXT_YEAR"] = "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf \u03ad\u03c4\u03bf\u03c2 (\u03ba\u03c1\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bc\u03b5\u03bd\u03bf\u03cd)";
Calendar._TT["SEL_DATE"] = "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1";
Calendar._TT["DRAG_TO_MOVE"] = "\u03a3\u03cd\u03c1\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03ba\u03b9\u03bd\u03ae\u03c3\u03b5\u03c4\u03b5";
Calendar._TT["PART_TODAY"] = " (\u03c3\u03ae\u03bc\u03b5\u03c1\u03b1)";
Calendar._TT["MON_FIRST"] = "\u0395\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1\u03c2 \u03c0\u03c1\u03ce\u03c4\u03b1";
Calendar._TT["SUN_FIRST"] = "\u0395\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae\u03c2 \u03c0\u03c1\u03ce\u03c4\u03b1";
Calendar._TT["CLOSE"] = "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf";
Calendar._TT["TODAY"] = "\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1";
Calendar._TT["TIME_PART"] = "(Shift-)\u03ba\u03bb\u03b9\u03ba \u03ae \u03bc\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ae";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "dd-mm-y";
Calendar._TT["TT_DATE_FORMAT"] = "D, d M";

Calendar._TT["WK"] = "\u03b5\u03b2\u03b4";


// local AM/PM designators
Calendar._TT["AM"] = "AM";
Calendar._TT["PM"] = "PM";
Calendar._TT["am"] = "am";
Calendar._TT["pm"] = "pm";