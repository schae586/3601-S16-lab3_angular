describe('testing basic functions', function(){
    //Tests for GPA Calculator

    it('gradeLetterConverterTest', function(){
        expect(gradeLetterConverter("A")).toEqual(4.00);
        expect(gradeLetterConverter("A-")).toEqual(3.67);
        expect(gradeLetterConverter("B+")).toEqual(3.33);
        expect(gradeLetterConverter("B")).toEqual(3.00);
        expect(gradeLetterConverter("B-")).toEqual(2.67);
        expect(gradeLetterConverter("C+")).toEqual(2.33);
        expect(gradeLetterConverter("C")).toEqual(2.00);
        expect(gradeLetterConverter("C-")).toEqual(1.67);
        expect(gradeLetterConverter("D+")).toEqual(1.33);
        expect(gradeLetterConverter("D")).toEqual(1.00);
        expect(gradeLetterConverter("D-")).toEqual(0.67);
        expect(gradeLetterConverter("F")).toEqual(0.00);
    });


    it('test GPA Calculator accuracy', function(){
        expect(calculateGPA(1, "A", 1, "A", 1, "A")).toBe("Your GPA is 4.00");
        expect(calculateGPA(1, "A-", 1, "A-", 1, "A-")).toBe("Your GPA is 3.67");
        expect(calculateGPA(1, "B+", 1, "B+", 1, "B+")).toBe("Your GPA is 3.33");
        expect(calculateGPA(1, "B", 1, "B", 1, "B")).toBe("Your GPA is 3.00");
        expect(calculateGPA(1, "B-", 1, "B-", 1, "B-")).toBe("Your GPA is 2.67");
        expect(calculateGPA(1, "C+", 1, "C+", 1, "C+")).toBe("Your GPA is 2.33");
        expect(calculateGPA(1, "C", 1, "C", 1, "C")).toBe("Your GPA is 2.00");
        expect(calculateGPA(1, "C-", 1, "C-", 1, "C-")).toBe("Your GPA is 1.67");
        expect(calculateGPA(1, "D+", 1, "D+", 1, "D+")).toBe("Your GPA is 1.33");
        expect(calculateGPA(1, "D", 1, "D", 1, "D")).toBe("Your GPA is 1.00");
        expect(calculateGPA(1, "D-", 1, "D-", 1, "D-")).toBe("Your GPA is 0.67");
        expect(calculateGPA(1, "F", 1, "F", 1, "F")).toBe("Your GPA is 0.00");
        //Testing a few random ones
        expect(calculateGPA(4, "B+", 5, "C", 2, "C+")).toBe("Your GPA is 2.54");
        expect(calculateGPA(2, "A", 2, "B", 4, "F")).toBe("Your GPA is 1.75");
        expect(calculateGPA(3, "A-", 3, "D-", 4, "C")).toBe("Your GPA is 2.10");
        expect(calculateGPA(4, "D", 1, "F", 7, "D+")).toBe("Your GPA is 1.11");
        expect(calculateGPA(2, "B+", 3, "C-", 1, "B-")).toBe("Your GPA is 2.39");
    });

});