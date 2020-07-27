const { longestPalindrome } = require("./longest-palindromic-substring");

describe("longestPalindrome", () => {
    test("Example test case 1", () => {
        const input = "babad";
        expect(longestPalindrome(input)).toBe("bab");
    });

    test("Example test case 2", () => {
        const input = "cbbd";
        expect(longestPalindrome(input)).toBe("bb");
    });

    test("Input is an even numbered string with all the same letters", () => {
        const input = "aaaaaa";
        expect(longestPalindrome(input)).toBe("aaaaaa");
    });

    test("Input is empty string", () => {
        const input = "";
        expect(longestPalindrome(input)).toBe("");
    });

    test("With mixed case input", () => {
        const input = "bABad";
        expect(longestPalindrome(input)).toBe("b");
    });

    test("With long inputs", () => {
        const input1 = "slnqazetmxcmryjbilxbzvqklqdlpeaddtbcrijpafhplyhgbpxyfyankquuwtevlwhzsppjbqkvvvtdaebzhbncqxrzsvqkoyrnjzxiavkuclcplalvokcmkperslaosgkbievjmunciseglezfbmapsnhmogwdbpdmpmhkawfgltjmliilbbagjbmmximrfopawblvixtgbdqqcbvhxmbygnguibreyjoyhquohblocnjaulljxnuhwecclfuefeznoqrkxiekxlmmbcvcxiwqdkabgnkjlqodnereupxgttfmuipvcvumhktjiiowspcysnzwqlexbllkoiibbspuhupyxdxahccqgmovznmaezkxxnzngxipgxdbrnorgcyusvjtxlubmnhqlazgtpfguusmfoefpldulmauqianfhbrbrfgqqitqdkszipgdcssxuozeioaqsqiojadwsuxwvjvhymglfksllqfnjndsikkrxhbaqhnihvqfhcfpiwqwwhbdagxgnxbbczjtbrcdqxcrxmvfkdwfbhmqwpsfjiidphplcbmlbfcflsqttvaqxzayyjtiqyutdzrhrdhrnzkviekgidggllppeuuiwyukzhfvbunptmjfebcmncsnejcqcrbgjlyzchlskbgyddcjzlxidfduetbnoanandnumgdxdafrjsqndteqdgqcgokucmnvyskjgbywuluztcnnrxhsnmehkwzwvrrmqznzonvepfyerwxgfhdjuwqwdlnunvtidbiyzubjxqsnenbxvjyaayhqnwbwlvrelqsoavwqvkphesgxrszepaqxnhfcmtrmjbywfeyiisckbpepiwwlymzherpjdcuqsizqdqkpevlroohegzpegehkiuohegzorecudnwjyyzwarryxpjhwpetwlsbntfooehfgxiszetbeajmwojvszovnknyjfpeysqomgaapfndpvuzyhuvxzralvh";
        expect(longestPalindrome(input1)).toBe("puhup");

        const input2 = "kidudwsptoalsgurjwsysahkzsztqbesugahtriitgecnxsvugmphzddgjavhsykrounxkbnjiowivbiwcblwoacpylbafngkcxffhcawicttticgscrovbaoknvfbfnqejcjutgwtfkbwhipvqsvclhwelhmszastyxpzjoreemhzxtppkduxfvxqtnhguhbdtuyofofegskpojmolcnmjkgqxlljcuqxwwtmqqsmflsczliooanpcutemjdbtizatkttcmztseraxsuarggbdfiyjjjtncgffkxnpdxdudqwjgubtyapjyyepdfjdxxyqfehyoaiileljnkwkfgvsvqjyqyxvoxczaynvfyffsgdpvtkbynlcrsmcohrpvkershzbidbqzmwbfigjkauhpnceoqknaeabazlguribisugfgericgxpfbpehlmmrltpuzakhutmkpclqumpawdbxutqzyqjykugakuucdrfyaluoptxhxknbupeblvqavwwbbrqrwxnersnnfaxnefqjdkvgiuiqjmunkmykznsbgnjwmrjroltzkmhuvzywvxpuaullrknzbwlopccbkukgoalprdvorbzfevqivbzyjngjpnhprqanjsitxjojskqyquqsywngjdaiytgitmuwhtdzqdvkgfoyamaygnufleyrxyakiwiyjcwhpivkxjnriwwpoxekkawkgmfjnrqpouknrsetgvlcggnnhtosodbwmqjhdwfcrxxgvhtyxqvwawxotxiqlmxgsdwgdqaexrooueesyoklipeifdkwtsaijvdhndczcrzmwlxmivqdowtpdthbtkcheusqdprllkygjlqoqdeyqcxqloxrctqgvefyfuqfojvuaqdjbpatcspjahqqmgiuuycmciyxzrmrrfswwlwhfxzmqmnhiwpoenlnfcoexyxlcpsblpvlkvednaijqmsaipticgmgkxvqnpkclokdmka";
        expect(longestPalindrome(input2)).toBe("yamay");

        const input3 = "nsldxcvlhllcuquahgkqkvzvsbdlbaktlnimhptnnzwmnmfjjhlxihrbdczavjzviymqpkdjcaowspduakemgilfcsyaprfsdqabfqwmcnhxwmesudnedrkpayaldjhughozjusvcsodrosqcajvfgsfscbuqdtawgtxadwmzehbdzfddgiqghzqvgobstandczayskltyjhbjtbbujbdfephyigcbllxauzntxwgthofmgixnjarxfneprvcmmwtligoboloboevzlhrrszjbgerakqbwlpnbffnahrgqfqbywcmfnpzymhswlbdartadwrjhnhijhgmbtprbhmxuhdtkogpijfollhczlraxhpnqjeclqpkkwinnongjpbdeohbebmtgzprklhuavyihuouflqbnirhfhnajdholifdlxxzdotfojceoiongeechigzovjsbnqctjctggiojjjhitsnfauwzhrkljyzblsyrgcpcpxwzhtdfdxpmqkoviqlkhlozzuihykmbddluxovyiybzbxwwuzcvuhnpogurrslbfaftmcqnahorawawxelempqhcmocikaspedlytezhibjecdqwwhhklkmshtkipabyzmeoworiytccjxwroepvjbbaurxhhnygkjbgiabbxklexdhyccrbxldaptioczqiylwfiumgihzarsayyakaujkixqspebiiogcsntbgtsnxgghroqrlrkjuxamuoummpwmkczbwpghkphedvltgukulrdflvloinbpwcnzhppovpcpyhdupxihtclvwjenunktlfvlleeaizczojaobrfufoffuqigjnclwkcnlxcfjrpqpsjfqtfgjsmyxtznajqdpoagnmerqcenljgdshfrumtmfpcdyppenfoitjyyqptqrxayqzrmqxplmlvetnjmvsjdfnlgizigfcwsjdltxursjrwyxjdvyxqpqpvwhaoxzktilb";
        expect(longestPalindrome(input3)).toBe("obolobo");
    });
});