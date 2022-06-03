// 
//     If you want to enter custom set of phrases, you can use this program.
//     Just follow these steps:
//     1) Fill the file text.txt with your phrases (they should be seperated by a new line)
//     2) Run this code and then enter number of phrases that you filled the textfile with

//     Program will automaticly convert this text into a JSON format and place it in assets folder.
//     I hope you'll enjoy it :)
// 

#include <iostream>
#include <fstream>
#include <vector>
#include <string>

using namespace std;

int main()
{
    ifstream input("text.txt");
    ofstream JSON("./../search-bar/src/assets/phrases.json");
    vector<string> phrases;
    int n;
    cout<<"How many words? ";
    cin>>n;
    string phrase;
    for(int i = 0; i < n; i++)
    {
        getline(input, phrase);
        phrases.push_back(phrase);
    }
    JSON<<"["<<endl;
    for(int i = 0; i < n; i++)
    {
        JSON<<"\t{"<<endl;
        JSON<<"\t\t\"id\": "<<i+1<<","<<endl;
        JSON<<"\t\t\"phrase\": "<<"\""<<phrases[i]<<"\""<<endl;
        JSON<<"\t}";
        if(i != n - 1) JSON<<","<<endl;
    }
    JSON<<endl;
    JSON<<']';
}