function calculate(){
  // 1. init & validate
  const cl = {
    '70%':	1.04,
    '75%':	1.15,
    '80%':	1.28,
    '85%':	1.44,
    '92%':	1.75,
    '95%':	1.96,
    '96%':	2.05,
    '98%':	2.33,
    '99%':	2.58,
    '99.9%':	3.29,
    '99.99%':	3.89,
    '99.999%':	4.42,
  };
  const p = input.get('population_proportion').percentage().val()/100;
  const N = input.get('population_size').optional().natural().val();

  switch($('[data-tab].tab--active').dataset.tab){
    case '0':{
      const z = cl[input.get('confidence_level_1').value];
      const e = input.get('margin_error').percentage().val()/100;
      if(!input.valid()) return;

      // 2. calculate
      const x = calc('z^2*p*(1-p)',{z,p});
      let n = calc('x/(e^2)',{x,e});
      if(N != null){
        n = calc('(n*N)/(N+n)',{n,N});
      }
      n = math.ceil(n);

      // 3. output
      _('result_sample_size').innerHTML = n;
    }break;
    case '1':{ 
      const z = cl[input.get('confidence_level_2').value];
      let n = input.get('sample_size').positive().val();
      if(!input.valid()) return;

      // 2. calculate
      const x = calc('z^2*p*(1-p)',{z,p});
      if(N != null){
        n = calc('(n-n*N)/(n-N)',{n,N});
      }
      let e = calc('sqrt(x/n)*100',{x,n});

      // 3. output
      _('result_margin_of_error').innerHTML = format(e)+'%';
    }break;
  }
}
