    const gulp = require ('gulp');
    const concat = require ('gulp-concat');
    const uglify = require ('gulp-uglify');
  //  const babel = require ('gulp-babel');

    gulp.task('compilar-scripts', function(){
        return gulp.src('js/*.js')      //endereço dos scripts
            .pipe(concat('scripts.js'))   //juntar totos os scripts
                    // .pipe(babel({               // traz responsavidade para os arquivos serem reconhecidos pelo uglify
                    //     presets:['@babel/env']
                    // })) // compilando para js ES5 
            .pipe(uglify()) // minificar o JavaScript //sómente util para o javascript
            .pipe(gulp.dest('minify')) // nome da pasta onde esse arquivo será criado
    } )  // criar babel antes do uglify. e deixar "gulp.dest" por ultimo
    // no terminal digitar "gulp "nome da gulp.task (no caso é "compilar-scripts"" // essa linha será rodada a cada atualização de modificações
    // no html, lincar arquivo criado (nesse caso é o "minify")


    gulp.task('compilar-styles', function(){
        return gulp.src('style/*.css')      
            .pipe(concat('styles.css'))   
            // .pipe(uglify()) 
            .pipe(gulp.dest('minify-css')) 
    } ) 