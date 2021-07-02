import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titlecaseexcept'
})
export class TitleCaseExceptPipe implements PipeTransform {
    transform(value: string) {
        if (!value) {
            return null;
        }

        const stringArray = value.split(' ').map((word, index) => {
            let newWord = word.toLowerCase();

            if (index === 0) {
                newWord = this.toTitleCase(newWord)
            }
            else {
                if (!this.isPreposition(newWord) && newWord.length) {
                    newWord = this.toTitleCase(newWord)
                }
            }
            return newWord;
        });

        return stringArray.join(' ');
    }

    private isPreposition(word:string):boolean {
        const prepositions = ['above', 'across', 'against', 'along', 'among', 'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'by', 'down', 'from', 'in', 'into', 'near', 'of', 'off', 'on', 'to', 'toward', 'under', 'upon', 'with', 'within', 'the'];

        return prepositions.includes(word);
    }

    private toTitleCase(word:string):string {
        const firstLetter = word[0].toUpperCase();
        const rest = word.substring(1, word.length);
        return firstLetter + rest;
    }
}