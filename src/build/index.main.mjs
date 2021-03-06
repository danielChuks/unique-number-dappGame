// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Elena(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Elena expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Elena expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v297, v298], secs: v300, time: v299, didSend: v40, from: v296 } = txn1;
  ;
  const v309 = stdlib.add(v299, v298);
  stdlib.protect(ctc1, await interact.acceptWager(v297), {
    at: './index.rsh:81:27:application',
    fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
    msg: 'acceptWager',
    who: 'Elena'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v296, v297, v298, v309],
    evt_cnt: 0,
    funcNum: 1,
    lct: v299,
    onlyIf: true,
    out_tys: [],
    pay: [v297, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v315, time: v314, didSend: v49, from: v313 } = txn2;
      
      const v317 = stdlib.add(v297, v297);
      sim_r.txns.push({
        amt: v297,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v318 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v319 = v314;
      const v326 = v317;
      
      if (await (async () => {
        const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v330;})()) {
        const v337 = stdlib.add(v319, v298);
        sim_r.isHalt = false;
        }
      else {
        const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v460 = v457 ? v458 : v459;
        const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v462 = v456 ? v461 : v460;
        const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '0')];
        const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '1')];
        const v465 = stdlib.mul(v463, v297);
        sim_r.txns.push({
          amt: v465,
          kind: 'from',
          to: v296,
          tok: undefined /* Nothing */
          });
        const v470 = stdlib.mul(v464, v297);
        sim_r.txns.push({
          amt: v470,
          kind: 'from',
          to: v313,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v309],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v296, v297, v298, v309],
      evt_cnt: 0,
      funcNum: 2,
      lct: v299,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v297,
          kind: 'from',
          to: v296,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeOut(), {
      at: './index.rsh:56:31:application',
      fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Elena'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v315, time: v314, didSend: v49, from: v313 } = txn2;
    const v317 = stdlib.add(v297, v297);
    ;
    let v318 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v319 = v314;
    let v326 = v317;
    
    while (await (async () => {
      const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v330;})()) {
      const v337 = stdlib.add(v319, v298);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v337],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v296, v297, v298, v313, v326, v337],
          evt_cnt: 0,
          funcNum: 5,
          lct: v319,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
            
            ;
            const v441 = stdlib.addressEq(v313, v438);
            const v442 = stdlib.addressEq(v296, v438);
            const v443 = v441 ? true : v442;
            ;
            sim_r.txns.push({
              amt: v326,
              kind: 'from',
              to: v313,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
        ;
        const v441 = stdlib.addressEq(v313, v438);
        const v442 = stdlib.addressEq(v296, v438);
        const v443 = v441 ? true : v442;
        stdlib.assert(v443, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Elena'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeOut(), {
          at: './index.rsh:56:31:application',
          fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Elena'
          });
        
        return;
        
        }
      else {
        const {data: [v346], secs: v348, time: v347, didSend: v70, from: v345 } = txn3;
        ;
        const v349 = stdlib.addressEq(v296, v345);
        stdlib.assert(v349, {
          at: './index.rsh:98:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Elena'
          });
        const v356 = stdlib.add(v347, v298);
        const v360 = stdlib.protect(ctc0, await interact.getCard(), {
          at: './index.rsh:107:57:application',
          fs: ['at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)'],
          msg: 'getCard',
          who: 'Elena'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v296, v297, v298, v313, v326, v346, v356, v360],
          evt_cnt: 1,
          funcNum: 6,
          lct: v347,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:109:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v362], secs: v364, time: v363, didSend: v80, from: v361 } = txn4;
            
            ;
            const v365 = stdlib.addressEq(v313, v361);
            ;
            const v372 = stdlib.add(v363, v298);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v356],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v296, v297, v298, v313, v326, v346, v356],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
              
              ;
              const v423 = stdlib.addressEq(v313, v420);
              const v424 = stdlib.addressEq(v296, v420);
              const v425 = v423 ? true : v424;
              ;
              sim_r.txns.push({
                amt: v326,
                kind: 'from',
                to: v296,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
          ;
          const v423 = stdlib.addressEq(v313, v420);
          const v424 = stdlib.addressEq(v296, v420);
          const v425 = v423 ? true : v424;
          stdlib.assert(v425, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Elena'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:56:31:application',
            fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Elena'
            });
          
          return;
          
          }
        else {
          const {data: [v362], secs: v364, time: v363, didSend: v80, from: v361 } = txn4;
          ;
          const v365 = stdlib.addressEq(v313, v361);
          stdlib.assert(v365, {
            at: './index.rsh:109:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Elena'
            });
          const v372 = stdlib.add(v363, v298);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v372],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v296, v297, v298, v313, v326, v346, v362, v372],
              evt_cnt: 0,
              funcNum: 9,
              lct: v363,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
                
                ;
                const v405 = stdlib.addressEq(v313, v402);
                const v406 = stdlib.addressEq(v296, v402);
                const v407 = v405 ? true : v406;
                ;
                sim_r.txns.push({
                  amt: v326,
                  kind: 'from',
                  to: v313,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
            ;
            const v405 = stdlib.addressEq(v313, v402);
            const v406 = stdlib.addressEq(v296, v402);
            const v407 = v405 ? true : v406;
            stdlib.assert(v407, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Elena'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeOut(), {
              at: './index.rsh:56:31:application',
              fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeOut',
              who: 'Elena'
              });
            
            return;
            
            }
          else {
            const {data: [v377, v378], secs: v380, time: v379, didSend: v90, from: v376 } = txn5;
            ;
            const v381 = stdlib.addressEq(v296, v376);
            stdlib.assert(v381, {
              at: './index.rsh:118:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Elena'
              });
            const v382 = stdlib.digest(ctc3, [v377, v378]);
            const v383 = stdlib.digestEq(v346, v382);
            stdlib.assert(v383, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:121:22:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Elena'
              });
            let v384;
            const v385 = stdlib.eq(v378, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v386 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v387 = v385 ? v386 : false;
            if (v387) {
              v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              if (v385) {
                v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                if (v386) {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v390 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            if (v390) {
              stdlib.protect(ctc1, await interact.informDraw(), {
                at: './index.rsh:61:28:application',
                fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:29:function exp)', 'at ./index.rsh:127:21:application call to "informDraw" (defined at: ./index.rsh:59:25:function exp)'],
                msg: 'informDraw',
                who: 'Elena'
                });
              
              }
            else {
              }
            let v396;
            if (v387) {
              v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              if (v385) {
                v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                if (v386) {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv318 = v396;
            const cv319 = v379;
            const cv326 = v326;
            
            v318 = cv318;
            v319 = cv319;
            v326 = cv326;
            
            continue;}
          
          }
        
        }
      
      }
    const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v460 = v457 ? v458 : v459;
    const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v462 = v456 ? v461 : v460;
    const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '0')];
    const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '1')];
    const v465 = stdlib.mul(v463, v297);
    ;
    const v470 = stdlib.mul(v464, v297);
    ;
    stdlib.protect(ctc1, await interact.viewResult(v318), {
      at: './index.rsh:66:28:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:29:function exp)', 'at ./index.rsh:143:13:application call to "viewResult" (defined at: ./index.rsh:64:31:function exp)'],
      msg: 'viewResult',
      who: 'Elena'
      });
    
    return;
    }
  
  
  
  };
export async function Klaus(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Klaus expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Klaus expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v292 = stdlib.protect(ctc0, interact.deadline, 'for Klaus\'s interact field deadline');
  const v293 = stdlib.protect(ctc0, interact.wager, 'for Klaus\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v293, v292],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:75:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v293, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v297, v298], secs: v300, time: v299, didSend: v40, from: v296 } = txn1;
      
      sim_r.txns.push({
        amt: v297,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v309 = stdlib.add(v299, v298);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v297, v298], secs: v300, time: v299, didSend: v40, from: v296 } = txn1;
  ;
  const v309 = stdlib.add(v299, v298);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v309],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v296, v297, v298, v309],
      evt_cnt: 0,
      funcNum: 2,
      lct: v299,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v297,
          kind: 'from',
          to: v296,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v484, time: v483, didSend: v260, from: v482 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeOut(), {
      at: './index.rsh:56:31:application',
      fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Klaus'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v315, time: v314, didSend: v49, from: v313 } = txn2;
    const v317 = stdlib.add(v297, v297);
    ;
    let v318 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v319 = v314;
    let v326 = v317;
    
    while (await (async () => {
      const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v330;})()) {
      const v337 = stdlib.add(v319, v298);
      const v341 = stdlib.protect(ctc0, await interact.getCard(), {
        at: './index.rsh:94:47:application',
        fs: ['at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
        msg: 'getCard',
        who: 'Klaus'
        });
      const v342 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:95:60:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
        msg: 'random',
        who: 'Klaus'
        });
      const v343 = stdlib.digest(ctc1, [v342, v341]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v296, v297, v298, v313, v326, v337, v343],
        evt_cnt: 1,
        funcNum: 4,
        lct: v319,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:98:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v346], secs: v348, time: v347, didSend: v70, from: v345 } = txn3;
          
          ;
          const v349 = stdlib.addressEq(v296, v345);
          ;
          const v356 = stdlib.add(v347, v298);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v337],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v296, v297, v298, v313, v326, v337],
          evt_cnt: 0,
          funcNum: 5,
          lct: v319,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
            
            ;
            const v441 = stdlib.addressEq(v313, v438);
            const v442 = stdlib.addressEq(v296, v438);
            const v443 = v441 ? true : v442;
            ;
            sim_r.txns.push({
              amt: v326,
              kind: 'from',
              to: v313,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v440, time: v439, didSend: v201, from: v438 } = txn4;
        ;
        const v441 = stdlib.addressEq(v313, v438);
        const v442 = stdlib.addressEq(v296, v438);
        const v443 = v441 ? true : v442;
        stdlib.assert(v443, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Klaus'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeOut(), {
          at: './index.rsh:56:31:application',
          fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Klaus'
          });
        
        return;
        
        }
      else {
        const {data: [v346], secs: v348, time: v347, didSend: v70, from: v345 } = txn3;
        ;
        const v349 = stdlib.addressEq(v296, v345);
        stdlib.assert(v349, {
          at: './index.rsh:98:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Klaus'
          });
        const v356 = stdlib.add(v347, v298);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v356],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v296, v297, v298, v313, v326, v346, v356],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
              
              ;
              const v423 = stdlib.addressEq(v313, v420);
              const v424 = stdlib.addressEq(v296, v420);
              const v425 = v423 ? true : v424;
              ;
              sim_r.txns.push({
                amt: v326,
                kind: 'from',
                to: v296,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v422, time: v421, didSend: v167, from: v420 } = txn5;
          ;
          const v423 = stdlib.addressEq(v313, v420);
          const v424 = stdlib.addressEq(v296, v420);
          const v425 = v423 ? true : v424;
          stdlib.assert(v425, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Klaus'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeOut(), {
            at: './index.rsh:56:31:application',
            fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Klaus'
            });
          
          return;
          
          }
        else {
          const {data: [v362], secs: v364, time: v363, didSend: v80, from: v361 } = txn4;
          ;
          const v365 = stdlib.addressEq(v313, v361);
          stdlib.assert(v365, {
            at: './index.rsh:109:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Klaus'
            });
          const v372 = stdlib.add(v363, v298);
          const txn5 = await (ctc.sendrecv({
            args: [v296, v297, v298, v313, v326, v346, v362, v372, v342, v341],
            evt_cnt: 2,
            funcNum: 8,
            lct: v363,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:118:13:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v377, v378], secs: v380, time: v379, didSend: v90, from: v376 } = txn5;
              
              ;
              const v381 = stdlib.addressEq(v296, v376);
              ;
              const v382 = stdlib.digest(ctc1, [v377, v378]);
              const v383 = stdlib.digestEq(v346, v382);
              ;
              let v384;
              const v385 = stdlib.eq(v378, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v386 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v387 = v385 ? v386 : false;
              if (v387) {
                v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                if (v385) {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  if (v386) {
                    v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const v390 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              if (v390) {
                
                }
              else {
                }
              let v396;
              if (v387) {
                v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                if (v385) {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  if (v386) {
                    v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv318 = v396;
              const cv319 = v379;
              const cv326 = v326;
              
              await (async () => {
                const v318 = cv318;
                const v319 = cv319;
                const v326 = cv326;
                
                if (await (async () => {
                  const v330 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v330;})()) {
                  const v337 = stdlib.add(v319, v298);
                  sim_r.isHalt = false;
                  }
                else {
                  const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                  const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  const v460 = v457 ? v458 : v459;
                  const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v462 = v456 ? v461 : v460;
                  const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '0')];
                  const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '1')];
                  const v465 = stdlib.mul(v463, v297);
                  sim_r.txns.push({
                    amt: v465,
                    kind: 'from',
                    to: v296,
                    tok: undefined /* Nothing */
                    });
                  const v470 = stdlib.mul(v464, v297);
                  sim_r.txns.push({
                    amt: v470,
                    kind: 'from',
                    to: v313,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v372],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v296, v297, v298, v313, v326, v346, v362, v372],
              evt_cnt: 0,
              funcNum: 9,
              lct: v363,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
                
                ;
                const v405 = stdlib.addressEq(v313, v402);
                const v406 = stdlib.addressEq(v296, v402);
                const v407 = v405 ? true : v406;
                ;
                sim_r.txns.push({
                  amt: v326,
                  kind: 'from',
                  to: v313,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v404, time: v403, didSend: v133, from: v402 } = txn6;
            ;
            const v405 = stdlib.addressEq(v313, v402);
            const v406 = stdlib.addressEq(v296, v402);
            const v407 = v405 ? true : v406;
            stdlib.assert(v407, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Klaus'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeOut(), {
              at: './index.rsh:56:31:application',
              fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeOut',
              who: 'Klaus'
              });
            
            return;
            
            }
          else {
            const {data: [v377, v378], secs: v380, time: v379, didSend: v90, from: v376 } = txn5;
            ;
            const v381 = stdlib.addressEq(v296, v376);
            stdlib.assert(v381, {
              at: './index.rsh:118:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Klaus'
              });
            const v382 = stdlib.digest(ctc1, [v377, v378]);
            const v383 = stdlib.digestEq(v346, v382);
            stdlib.assert(v383, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:121:22:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Klaus'
              });
            let v384;
            const v385 = stdlib.eq(v378, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v386 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v387 = v385 ? v386 : false;
            if (v387) {
              v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              if (v385) {
                v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                if (v386) {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v384 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v390 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            if (v390) {
              stdlib.protect(ctc3, await interact.informDraw(), {
                at: './index.rsh:61:28:application',
                fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:29:function exp)', 'at ./index.rsh:127:21:application call to "informDraw" (defined at: ./index.rsh:59:25:function exp)'],
                msg: 'informDraw',
                who: 'Klaus'
                });
              
              }
            else {
              }
            let v396;
            if (v387) {
              v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              if (v385) {
                v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                if (v386) {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v396 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv318 = v396;
            const cv319 = v379;
            const cv326 = v326;
            
            v318 = cv318;
            v319 = cv319;
            v326 = cv326;
            
            continue;}
          
          }
        
        }
      
      }
    const v456 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v457 = stdlib.eq(v318, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v460 = v457 ? v458 : v459;
    const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v462 = v456 ? v461 : v460;
    const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '0')];
    const v464 = v462[stdlib.checkedBigNumberify('./index.rsh:135:9:array', stdlib.UInt_max, '1')];
    const v465 = stdlib.mul(v463, v297);
    ;
    const v470 = stdlib.mul(v464, v297);
    ;
    stdlib.protect(ctc3, await interact.viewResult(v318), {
      at: './index.rsh:66:28:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:29:function exp)', 'at ./index.rsh:143:13:application call to "viewResult" (defined at: ./index.rsh:64:31:function exp)'],
      msg: 'viewResult',
      who: 'Klaus'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAFQCAUJIAcCKHiAAVgwJgMBAAEBACI1ADEYQQUNKmRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEEDEACVkkhBwxAAWFJJQxAAQhJIQUMQABWIQUSRCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIQtbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCBCVIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4lWzX9gAQ1GirQNP4WUDT9FlCwMgY0AyELWwxENP8xABJENANXWCA0/hY0/RZQARJENP0iEjX8NAMhClsiEjX7NPw0+xBBAAYjNfpCABo0/EEABiI1+kIADzT7QQAHIQg1+kIAAyM1+jT/NAMhBls0AyEJWzQDVzAgNPoyBjQDJFtCAsZIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDQDVzAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IDJ0mBBgxAAJdIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+1dYIDX6STUFFzX5gARw7e96NPkWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEFNQEyBjUCQgKlSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQxbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAjlJIQgMQADRSYEEDEAAiUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEJWzX9VzAgNfwkWzX7STUFNfqABDiwIy00+lCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUChLAVcAf2cpSwFXfwFnSCEHNQEyBjUCQgG+IQgSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEGW7III7IQNANXACCyB7NCAWFJIwxAAEhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf+ABJqLkXSwMgY0AyENWwxENP+IAYQ0A1cAIDT/NAMhCVsxACMyBjT/SQhCAF9IIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsIGgjQaIATk0/4gBNDIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIA0DX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEENQEyBjUCQgCMgBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNP0hCBJNgBAAAAAAAAAAAgAAAAAAAAAANP0iEk01+LEisgE0+CJbNPoLsggjshA0+bIHs7EisgE0+CVbNPoLsggjshA0/LIHs0IAADEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v298",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v298",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v362",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v362",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001cba38038062001cba83398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b61199b806200031f6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461157a565b610197565b6100a16100e836600461157a565b61032e565b3480156100f957600080fd5b506001546100b4565b6100a161011036600461159d565b6104ac565b6100a161012336600461157a565b61073f565b6100a161013636600461157a565b6108da565b6100a161014936600461157a565b610b7b565b34801561015a57600080fd5b50610163610dbf565b6040516100be9291906115af565b6100a161017f36600461157a565b610e5c565b6100a161019236600461157a565b610ff3565b6101a76001600054146009611149565b6101c1813515806101ba57506001548235145b600a611149565b6000808055600280546101d39061160c565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061160c565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061165d565b905061027781606001514310600b611149565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a89291906116d6565b60405180910390a16102c1816020015134146008611149565b6102c961139e565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152516103179080611729565b6020820151604001526103298161116e565b505050565b61033e600160005414600d611149565b6103588135158061035157506001548235145b600e611149565b60008080556002805461036a9061160c565b80601f01602080910402602001604051908101604052809291908181526020018280546103969061160c565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b50505050508060200190518101906103fb919061165d565b905061040f8160600151431015600f611149565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516104409291906116d6565b60405180910390a16104543415600c611149565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b50600080805560018190556104a8906002906113f7565b5050565b6104bc6009600054146027611149565b6104d6813515806104cf57506001548235145b6028611149565b6000808055600280546104e89061160c565b80601f01602080910402602001604051908101604052809291908181526020018280546105149061160c565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b50505050508060200190518101906105799190611741565b60408051606081018252600080825260208201819052918101919091529091506105aa8260e0015143106029611149565b604080513381528435602080830191909152850135818301529084013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a161060534156024611149565b815161061d906001600160a01b031633146025611149565b604080516106699161064391602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146026611149565b60408301351580825260c083015115602083015261068857600061068e565b80602001515b1561069f57600160408201526106d0565b8051156106b257600060408201526106d0565b8060200151156106c857600260408201526106d0565b600160408201525b6106d861139e565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528382015181840180519190915280514392019190915260808501519051909101526107398161116e565b50505050565b61074f6005600054146017611149565b6107698135158061076257506001548235145b6018611149565b60008080556002805461077b9061160c565b80601f01602080910402602001604051908101604052809291908181526020018280546107a79061160c565b80156107f45780601f106107c9576101008083540402835291602001916107f4565b820191906000526020600020905b8154815290600101906020018083116107d757829003601f168201915b505050505080602001905181019061080c91906117ed565b90506108208160a001514310156019611149565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516108519291906116d6565b60405180910390a161086534156015611149565b6060810151610899906001600160a01b0316331461088f5781516001600160a01b03163314610892565b60015b6016611149565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610491573d6000803e3d6000fd5b6108ea600760005414601c611149565b610904813515806108fd57506001548235145b601d611149565b6000808055600280546109169061160c565b80601f01602080910402602001604051908101604052809291908181526020018280546109429061160c565b801561098f5780601f106109645761010080835404028352916020019161098f565b820191906000526020600020905b81548152906001019060200180831161097257829003601f168201915b50505050508060200190518101906109a79190611881565b90506109bf6040518060200160405280600081525090565b6109d08260c001514310601e611149565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3384604051610a0192919061191f565b60405180910390a1610a153415601a611149565b6060820151610a30906001600160a01b03163314601b611149565b6040820151610a3f9043611729565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610b509183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b74929190611434565b5050505050565b610b8b6005600054146012611149565b610ba581351580610b9e57506001548235145b6013611149565b600080805560028054610bb79061160c565b80601f0160208091040260200160405190810160405280929190818152602001828054610be39061160c565b8015610c305780601f10610c0557610100808354040283529160200191610c30565b820191906000526020600020905b815481529060010190602001808311610c1357829003601f168201915b5050505050806020019051810190610c4891906117ed565b9050610c606040518060200160405280600081525090565b610c718260a0015143106014611149565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610ca292919061191f565b60405180910390a1610cb634156010611149565b8151610cce906001600160a01b031633146011611149565b6040820151610cdd9043611729565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610b50565b600060606000546002808054610dd49061160c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e009061160c565b8015610e4d5780601f10610e2257610100808354040283529160200191610e4d565b820191906000526020600020905b815481529060010190602001808311610e3057829003601f168201915b50505050509050915091509091565b610e6c6007600054146021611149565b610e8681351580610e7f57506001548235145b6022611149565b600080805560028054610e989061160c565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec49061160c565b8015610f115780601f10610ee657610100808354040283529160200191610f11565b820191906000526020600020905b815481529060010190602001808311610ef457829003601f168201915b5050505050806020019051810190610f299190611881565b9050610f3d8160c001514310156023611149565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f6e9291906116d6565b60405180910390a1610f823415601f611149565b6060810151610fb6906001600160a01b03163314610fac5781516001600160a01b03163314610faf565b60015b6020611149565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610491573d6000803e3d6000fd5b611003600960005414602c611149565b61101d8135158061101657506001548235145b602d611149565b60008080556002805461102f9061160c565b80601f016020809104026020016040519081016040528092919081815260200182805461105b9061160c565b80156110a85780601f1061107d576101008083540402835291602001916110a8565b820191906000526020600020905b81548152906001019060200180831161108b57829003601f168201915b50505050508060200190518101906110c09190611741565b90506110d48160e00151431015602e611149565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516111059291906116d6565b60405180910390a16111193415602a611149565b6060810151610899906001600160a01b031633146111435781516001600160a01b03163314611146565b60015b602b5b816104a85760405163100960cb60e01b81526004810182905260240160405180910390fd5b6111766114b8565b6020820151516001141561128957815160400151602080840151015161119c9190611729565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610739929190611434565b60208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051919091525182015282015151156112e9576020820151516002146112df5780604001516112ef565b80602001516112ef565b80606001515b608082018190528251805160209091015191516001600160a01b03909116916108fc9161131c9190611946565b6040518115909202916000818181858888f19350505050158015611344573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc8360000151602001518360800151602001516113769190611946565b6040518115909202916000818181858888f19350505050158015610491573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016113f260405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114039061160c565b6000825580601f10611413575050565b601f016020900490600052602060002090810190611431919061154d565b50565b8280546114409061160c565b90600052602060002090601f01602090048101928261146257600085556114a8565b82601f1061147b57805160ff19168380011785556114a8565b828001600101855582156114a8579182015b828111156114a857825182559160200191906001019061148d565b506114b492915061154d565b5090565b6040518060a00160405280600081526020016114e7604051806040016040528060008152602001600081525090565b8152602001611509604051806040016040528060008152602001600081525090565b815260200161152b604051806040016040528060008152602001600081525090565b81526020016113f2604051806040016040528060008152602001600081525090565b5b808211156114b4576000815560010161154e565b60006040828403121561157457600080fd5b50919050565b60006040828403121561158c57600080fd5b6115968383611562565b9392505050565b60006060828403121561157457600080fd5b82815260006020604081840152835180604085015260005b818110156115e3578581018301518582016060015282016115c7565b818111156115f5576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061162057607f821691505b6020821081141561157457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461165857600080fd5b919050565b60006080828403121561166f57600080fd5b6040516080810181811067ffffffffffffffff821117156116a057634e487b7160e01b600052604160045260246000fd5b6040526116ac83611641565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461170457600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561173c5761173c611713565b500190565b600061010080838503121561175557600080fd5b6040519081019067ffffffffffffffff8211818310171561178657634e487b7160e01b600052604160045260246000fd5b8160405261179384611641565b815260208401516020820152604084015160408201526117b560608501611641565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c082840312156117ff57600080fd5b60405160c0810181811067ffffffffffffffff8211171561183057634e487b7160e01b600052604160045260246000fd5b60405261183c83611641565b8152602083015160208201526040830151604082015261185e60608401611641565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561189357600080fd5b60405160e0810181811067ffffffffffffffff821117156118c457634e487b7160e01b600052604160045260246000fd5b6040526118d083611641565b815260208301516020820152604083015160408201526118f260608401611641565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101611596602083018480358252602090810135910152565b600081600019048311821515161561196057611960611713565b50029056fea26469706673582212200188b285ad1a87a74ea9f11fa44dc3ba217b3fec253761a55174e78099aeb71e64736f6c634300080c0033`,
  BytecodeLen: 7354,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:77:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:145:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:90:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:99:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:100:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:111:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:119:56:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Elena": Elena,
  "Klaus": Klaus
  };
export const _APIs = {
  };
