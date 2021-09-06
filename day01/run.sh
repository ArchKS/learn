# run ts file
# usage: ./run.sh duck 

if [[ -z $1 ]];then
  exit 1;
fi

tsc $1.ts --outFile $1.js && node $1.js && rm -f $1.js
rm -f .*un~
